import { type FC, memo } from "react";
import type { TimelineEvent } from "./types";

interface EventItemProps {
  event: TimelineEvent;
  position: "above" | "middle" | "below";
  getDatePosition: (date: Date) => number;
}

// const getIcon = (iconType?: string): string => {
//   switch (iconType) {
//     case "headphone":
//       return "🎧";
//     case "arrow-out":
//       return "↗️";
//     case "people":
//       return "👥";
//     case "grid":
//       return "⊞";
//     default:
//       return "";
//   }
// };

export const EventItem: FC<EventItemProps> = memo(
  ({ event, position, getDatePosition }) => {
    const eventDateLabel = event.date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Format count label
    const getCountLabel = () => {
      if (event.count === undefined) return null;
      if (event.showCountLabel) {
        return `${event.label} - ${event.count.toString().padStart(2, "0")}`;
      }
      return event.count.toString().padStart(2, "0");
    };

    // Don't use absolute positioning for events in groups (above position)
    const useAbsolutePosition = position !== "above";
    const inlineStyle = useAbsolutePosition
      ? { left: `${getDatePosition(event.date)}%` }
      : {};

    return (
      <div
        className={`lifecycle-event lifecycle-event-${position} lifecycle-event-${event.type}`}
        style={inlineStyle}
        role="listitem"
        aria-label={`${event.type} event: ${event.label} on ${eventDateLabel}`}
      >
        {/* Profile images */}
        {event.profileImages && event.profileImages.length > 0 && (
          <div
            className="lifecycle-event-profiles"
            aria-label="Event participants"
          >
            {event.profileImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Participant ${idx + 1}`}
                className="lifecycle-event-profile-image"
              />
            ))}
          </div>
        )}

        {/* Flag icon */}
        {event.type === "flag" && (
          <div
            className="lifecycle-event-flag"
            aria-label="Flagged event"
            role="img"
          >
            🚩
          </div>
        )}

        {/* Event card */}
        <div
          className={`lifecycle-event-card lifecycle-event-card-${event.type}`}
        >
          {/* Content */}
          <div className="lifecycle-event-card-content">
            {/* Label or count label - only show if label exists */}
            {event.label &&
              (event.showCountLabel && event.count !== undefined ? (
                <div className="lifecycle-event-card-label">
                  {getCountLabel()}
                </div>
              ) : (
                <div className="lifecycle-event-card-label">
                  {event.label}
                  {event.count !== undefined && !event.showCountLabel && (
                    <span className="lifecycle-event-card-count">
                      {" "}
                      - {event.count.toString().padStart(2, "0")}
                    </span>
                  )}
                </div>
              ))}

            {/* Participant names as a list */}
            {event.showParticipantNames &&
              event.participants &&
              event.participants.length > 0 && (
                <div className="lifecycle-event-card-participants">
                  {event.participants.map((name, idx) => (
                    <div key={idx} className="lifecycle-event-card-participant">
                      {name}
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
);

EventItem.displayName = "EventItem";
