import { type FC, memo } from "react";
import type { TimelineEvent } from "./types";

interface EventItemProps {
  event: TimelineEvent;
  position: "above" | "below";
  getDatePosition: (date: Date) => number;
}

export const EventItem: FC<EventItemProps> = memo(({ event, position, getDatePosition }) => {
  return (
    <div
      className={`lifecycle-event lifecycle-event-${position}`}
      style={{ left: `${getDatePosition(event.date)}%` }}
    >
      {event.profileImages && event.profileImages.length > 0 && (
        <div className="lifecycle-event-profiles">
          {event.profileImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Profile"
              className="lifecycle-event-profile-image"
            />
          ))}
        </div>
      )}
      {event.type === "flag" && (
        <div className="lifecycle-event-flag">🚩</div>
      )}
      {event.icon && (
        <div className="lifecycle-event-icon">{event.icon}</div>
      )}
      <div className={`lifecycle-event-label lifecycle-event-label-${event.type}`}>
        {event.label}
        {event.count !== undefined && ` - ${event.count.toString().padStart(2, "0")}`}
      </div>
    </div>
  );
});

EventItem.displayName = "EventItem";

