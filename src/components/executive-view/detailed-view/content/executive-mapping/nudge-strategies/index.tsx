import { FlagIcon } from "@assets/images";
import { NudgeTag, ProfileIcon, Rating } from "@components/common";
import "@components/executive-view/detailed-view/content/executive-mapping/nudge-strategies/index.scss";
import type { NudgeProfileStrategy } from "@components/executive-view/types";

const nudgeStrategies: NudgeProfileStrategy[] = [
  {
    id: 1,
    rating: 3,
    meetingName: "DIA Global Annual Meeting",
    tag: "Panelist",
    persons: ["userIcon2", "userIcon4", "userIcon3"],
  },
  {
    id: 2,
    rating: 3,
    meetingName: "DIA Global Annual Meeting",
    tag: "Panelist",
    persons: ["userIcon2", "userIcon4", "userIcon3"],
  },
  {
    id: 3,
    rating: 3,
    meetingName: "DIA Global Annual Meeting",
    tag: "Panelist",
    persons: ["userIcon2", "userIcon4", "userIcon3"],
  },
  {
    id: 4,
    rating: 3,
    meetingName: "DIA Global Annual Meeting",
    tag: "Panelist",
    persons: ["userIcon2", "userIcon4", "userIcon3"],
  },
];

export const NudgeStrategies = () => {
  return (
    <div className="nudge-strategy">
      <div className="view-nudge-strategy">
        <FlagIcon className="view-nudge-strategy-icon" />
        VIEW NUDGE STRATEGY
      </div>
      <div className="view-nudge-strategies">
        {nudgeStrategies.map((nudgeStrategy) => {
          const { id, rating, meetingName, tag, persons } = nudgeStrategy;
          return (
            <div className="nudge-strategy-item" key={id}>
              <div className="nudge-strategy-details">
                <Rating rating={rating} />
                <label className="nudge-strategy-details-label">
                  {meetingName}
                </label>
                <NudgeTag
                  tagName={tag}
                  className="nudge-strategy-details-tag"
                />
              </div>
              <div className="nudge-strategy-profiles">
                {persons.map((person, index) => (
                  <ProfileIcon
                    image={person}
                    key={index}
                    className="nudge-strategy-profile"
                    style={{
                      left: `${index * 1.5 - index * 0.5}rem`,
                      zIndex: persons.length - index,
                    }}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
