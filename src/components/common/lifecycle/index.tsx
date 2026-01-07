import { type FC, useMemo, useCallback } from "react";
import "@components/common/lifecycle/index.scss";
import type { LifecycleProps } from "./types";
import { EventItem } from "./event-item";

// Constants
const ARROW_INDICATOR = " >>>";
const MILESTONE_INDICES = [2]; // Indices where milestone arrows should appear

export const Lifecycle: FC<LifecycleProps> = ({
  startDate,
  endDate,
  segments,
  events,
  className = "",
}) => {
  const totalDays = useMemo(() => {
    const diff = endDate.getTime() - startDate.getTime();
    if (diff <= 0) {
      console.warn("Lifecycle: endDate must be after startDate");
      return 1; // Prevent division by zero
    }
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  const monthMarkers = useMemo(() => {
    const markers: Date[] = [];
    const current = new Date(startDate);
    while (current <= endDate) {
      markers.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
    }
    return markers;
  }, [startDate, endDate]);

  const formatMonthLabel = useCallback((date: Date): string => {
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${year}`;
  }, []);

  const formatShortMonthLabel = useCallback((date: Date): string => {
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    return `${month} ${year}`;
  }, []);

  const getDatePosition = useCallback((date: Date): number => {
    const daysFromStart =
      (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
    return (daysFromStart / totalDays) * 100;
  }, [startDate, totalDays]);

  const monthMarkersWithPositions = useMemo(() => {
    return monthMarkers.map((marker) => ({
      date: marker,
      position: getDatePosition(marker),
    }));
  }, [monthMarkers, getDatePosition]);

  const segmentsWithStyles = useMemo(() => {
    return segments.map((segment) => {
      const left = getDatePosition(segment.startDate);
      const width =
        getDatePosition(segment.endDate) - getDatePosition(segment.startDate);
      return {
        ...segment,
        styles: {
          left: `${left}%`,
          width: `${width}%`,
        },
      };
    });
  }, [segments, getDatePosition]);

  const eventsByPosition = useMemo(() => {
    const above: typeof events = [];
    const middle: typeof events = [];
    const below: typeof events = [];
    events.forEach((event) => {
      if (event.position === "above") {
        above.push(event);
      } else if (event.position === "middle") {
        middle.push(event);
      } else {
        below.push(event);
      }
    });
    return { above, middle, below };
  }, [events]);

  return (
    <div 
      className={`lifecycle-container ${className}`}
      role="region"
      aria-label="Timeline lifecycle view"
    >
      {/* Emoji indicators on the left */}
      <div className="lifecycle-sentiment-indicators" aria-hidden="true">
        <div className="lifecycle-sentiment-indicator lifecycle-sentiment-positive" aria-label="Positive sentiment">
          ⭐
        </div>
        <div className="lifecycle-sentiment-indicator lifecycle-sentiment-negative" aria-label="Negative sentiment">
          😔
        </div>
      </div>

      {/* Main timeline */}
      <div className="lifecycle-timeline-wrapper">
        {/* Month markers */}
        <div className="lifecycle-month-markers" role="list" aria-label="Month markers">
          {monthMarkersWithPositions.map((markerData, index) => {
            const isFirst = index === 0;
            const isLast = index === monthMarkersWithPositions.length - 1;
            return (
                  <div
                    key={index}
                    className="lifecycle-month-marker"
                    style={{ left: `${markerData.position}%` }}
                    role="listitem"
                    aria-label={formatMonthLabel(markerData.date)}
                  >
                    <div className={`lifecycle-month-marker-line ${isFirst ? 'lifecycle-month-marker-line-first' : ''}`} />
                <div
                  className={`lifecycle-month-marker-label ${
                    isLast
                      ? "lifecycle-month-marker-label-middle"
                      : isFirst
                      ? "lifecycle-month-marker-label-below"
                      : "lifecycle-month-marker-label-bottom"
                  }`}
                >
                  {isFirst || isLast
                    ? formatMonthLabel(markerData.date)
                    : formatShortMonthLabel(markerData.date)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline bar with segments */}
        <div className="lifecycle-timeline-bar">
          {/* Start circle marker at first segment start */}
          {segments.length > 0 && (
            <div
              className="lifecycle-timeline-start-circle"
              style={{ 
                left: `calc(${getDatePosition(segments[0].startDate)}% + 2.5rem)` 
              }}
              aria-label="Timeline start"
              role="img"
            />
          )}
          
          {/* Segments container with clipping */}
          <div className="lifecycle-segments-container">
            {segmentsWithStyles.map((segment, index) => (
              <div
                key={segment.id}
                className={`lifecycle-segment lifecycle-segment-${segment.color}`}
                style={segment.styles}
                role="region"
                aria-label={`Timeline segment ${index + 1}: ${segment.label || segment.color}`}
              >
              </div>
            ))}
          </div>

          {/* Flag icon at end */}
          <div
            className="lifecycle-timeline-end-flag"
            style={{ 
              left: `calc(${getDatePosition(endDate)}% + 1.5rem)` 
            }}
            aria-label="Timeline end"
            role="img"
          >
            🚩
          </div>
        </div>

        {/* Events above timeline - grouped by date for vertical stacking */}
        <div className="lifecycle-events lifecycle-events-above">
          {(() => {
            // Group events by date (rounded to month for stacking)
            const eventsByDate = new Map<string, typeof eventsByPosition.above>();
            eventsByPosition.above.forEach((event) => {
              const dateKey = `${event.date.getFullYear()}-${event.date.getMonth()}`;
              if (!eventsByDate.has(dateKey)) {
                eventsByDate.set(dateKey, []);
              }
              eventsByDate.get(dateKey)!.push(event);
            });

            // Sort events within each group: "meetings-logged" first, then participant names
            eventsByDate.forEach((groupedEvents) => {
              groupedEvents.sort((a, b) => {
                // Meetings logged events first
                if (a.type === "meetings-logged" && b.type !== "meetings-logged") return -1;
                if (a.type !== "meetings-logged" && b.type === "meetings-logged") return 1;
                return 0;
              });
            });

            // Render grouped events
            const renderedGroups: JSX.Element[] = [];
            eventsByDate.forEach((groupedEvents, dateKey) => {
              const basePosition = getDatePosition(groupedEvents[0].date);
              renderedGroups.push(
                <div
                  key={`group-${dateKey}`}
                  className="lifecycle-event-group-wrapper"
                  style={{ 
                    left: `${basePosition}%`,
                  }}
                >
                  {groupedEvents.map((event, index) => (
                    <EventItem
                      key={event.id}
                      event={event}
                      position="above"
                      getDatePosition={getDatePosition}
                    />
                  ))}
                </div>
              );
            });

            return renderedGroups;
          })()}
        </div>

        {/* Events on timeline (middle) */}
        <div className="lifecycle-events lifecycle-events-middle">
          {eventsByPosition.middle.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              position="middle"
              getDatePosition={getDatePosition}
            />
          ))}
        </div>

        {/* Events below timeline - grouped by date for vertical stacking */}
        <div className="lifecycle-events lifecycle-events-below">
          {(() => {
            // Group events by date (rounded to month for stacking)
            const eventsByDate = new Map<string, typeof eventsByPosition.below>();
            eventsByPosition.below.forEach((event) => {
              const dateKey = `${event.date.getFullYear()}-${event.date.getMonth()}`;
              if (!eventsByDate.has(dateKey)) {
                eventsByDate.set(dateKey, []);
              }
              eventsByDate.get(dateKey)!.push(event);
            });

            // Sort events within each group: participant names first, then "meetings-logged"
            eventsByDate.forEach((groupedEvents) => {
              groupedEvents.sort((a, b) => {
                // Participant names first
                if (a.showParticipantNames && !b.showParticipantNames) return -1;
                if (!a.showParticipantNames && b.showParticipantNames) return 1;
                // Then meetings logged
                if (a.type === "meetings-logged" && b.type !== "meetings-logged") return 1;
                if (a.type !== "meetings-logged" && b.type === "meetings-logged") return -1;
                return 0;
              });
            });

            // Render grouped events
            const renderedGroups: JSX.Element[] = [];
            eventsByDate.forEach((groupedEvents, dateKey) => {
              const basePosition = getDatePosition(groupedEvents[0].date);
              renderedGroups.push(
                <div
                  key={`group-below-${dateKey}`}
                  className="lifecycle-event-group-wrapper"
                  style={{ 
                    left: `${basePosition}%`,
                  }}
                >
                  {groupedEvents.map((event, index) => (
                    <EventItem
                      key={event.id}
                      event={event}
                      position="below"
                      getDatePosition={getDatePosition}
                    />
                  ))}
                </div>
              );
            });

            return renderedGroups;
          })()}
        </div>
      </div>

    </div>
  );
};

