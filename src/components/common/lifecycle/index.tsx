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
                {/* Arrow markers for milestones */}
                {(MILESTONE_INDICES.includes(index) || index === segmentsWithStyles.length - 1) && (
                  <div className="lifecycle-segment-arrows" aria-hidden="true">
                    {ARROW_INDICATOR}
                  </div>
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

