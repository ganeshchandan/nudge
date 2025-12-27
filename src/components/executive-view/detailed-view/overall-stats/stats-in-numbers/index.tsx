import "@components/executive-view/detailed-view/overall-stats/stats-in-numbers/index.scss";
import { DETAILED_EXECUTIVE_CAPITAL_ENGAGEMENT_FIELDS } from "@components/executive-view/detailed-view/constants";
import type { FC } from "react";
import type { EngagementScores } from "@components/executive-view/types";

interface StatsInNumbersProps {
  engagementScores: EngagementScores;
}

export const StatsInNumbers: FC<StatsInNumbersProps> = ({
  engagementScores,
}) => {
  return (
    <div className="stats-in-numbers">
      {DETAILED_EXECUTIVE_CAPITAL_ENGAGEMENT_FIELDS.map(
        ({ name, value, isClickAble, type }) => {
          return (
            <div
              className={`stats-in-number ${
                isClickAble ? "stats-in-number-clickable" : ""
              } stats-in-number-${type}`}
            >
              <div className="stats-in-number-header">{name}</div>
              <div className="stats-in-number-value">
                {engagementScores[value] as any}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
