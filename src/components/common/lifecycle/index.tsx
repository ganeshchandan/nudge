import { type FC, useMemo, useCallback } from "react";
import "@components/common/lifecycle/index.scss";
import type { LifecycleProps } from "./types";
import { EventItem } from "./event-item";

export const Lifecycle: FC<LifecycleProps> = ({
  startDate,
  endDate,
  segments,
  events,
  className = "",
}) => {
  const totalDays = useMemo(() => {
    return Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
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
    const below: typeof events = [];
    events.forEach((event) => {
      if (event.position === "above") {
        above.push(event);
      } else {
        below.push(event);
      }
    });
    return { above, below };
  }, [events]);

  return (
    <div className={`lifecycle-container ${className}`}>
      {/* Emoji indicators on the left */}
      <div className="lifecycle-sentiment-indicators">
        <div className="lifecycle-sentiment-indicator lifecycle-sentiment-positive">
          ⭐
        </div>
        <div className="lifecycle-sentiment-indicator lifecycle-sentiment-negative">
          😔
        </div>
      </div>

      {/* Main timeline */}
      <div className="lifecycle-timeline-wrapper">
        {/* Month markers */}
        <div className="lifecycle-month-markers">
          {monthMarkersWithPositions.map((markerData, index) => {
            const isFirst = index === 0;
            const isLast = index === monthMarkersWithPositions.length - 1;
            return (
                  <div
                    key={index}
                    className="lifecycle-month-marker"
                    style={{ left: `${markerData.position}%` }}
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
            />
          )}
          
          {/* Segments container with clipping */}
          <div className="lifecycle-segments-container">
            {segmentsWithStyles.map((segment, index) => (
              <div
                key={segment.id}
                className={`lifecycle-segment lifecycle-segment-${segment.color}`}
                style={segment.styles}
              >
                {/* Arrow markers for milestones */}
                {(index === 2 || index === segmentsWithStyles.length - 1) && (
                  <div className="lifecycle-segment-arrows">{" >>>"}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events above timeline */}
        <div className="lifecycle-events lifecycle-events-above">
          {eventsByPosition.above.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              position="above"
              getDatePosition={getDatePosition}
            />
          ))}
        </div>

        {/* Events below timeline */}
        <div className="lifecycle-events lifecycle-events-below">
          {eventsByPosition.below.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              position="below"
              getDatePosition={getDatePosition}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="lifecycle-scroll-indicator">
        <div className="lifecycle-scroll-indicator-line" />
        <div className="lifecycle-scroll-indicator-dot" />
        <div className="lifecycle-scroll-indicator-line" />
      </div>
    </div>
  );
};

