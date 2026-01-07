import { type FC, memo } from "react";
import type { TimelineEvent } from "./types";

interface EventItemProps {
  event: TimelineEvent;
  position: "above" | "middle" | "below";
  getDatePosition: (date: Date) => number;
}

export const EventItem: FC<EventItemProps> = memo(({ event, position, getDatePosition }) => {
  const eventDateLabel = event.date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className={`lifecycle-event lifecycle-event-${position}`}
      style={{ left: `${getDatePosition(event.date)}%` }}
      role="listitem"
      aria-label={`${event.type} event: ${event.label} on ${eventDateLabel}`}
    >
      {event.profileImages && event.profileImages.length > 0 && (
        <div className="lifecycle-event-profiles" aria-label="Event participants">
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
      {event.type === "flag" && (
        <div className="lifecycle-event-flag" aria-label="Flagged event" role="img">🚩</div>
      )}
      {event.icon && (
        <div className="lifecycle-event-icon" aria-hidden="true">{event.icon}</div>
      )}
      <div className={`lifecycle-event-label lifecycle-event-label-${event.type}`}>
        {event.label}
        {event.count !== undefined && ` - ${event.count.toString().padStart(2, "0")}`}
      </div>
    </div>
  );
});

EventItem.displayName = "EventItem";

