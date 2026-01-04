import "@components/executive-view/detailed-view/overall-stats/stats-in-numbers/index.scss";
import { useContext, type FC } from "react";
import type { EngagementScores } from "@components/executive-view/types";
import { ExecutiveContext } from "@components/executive-view/context/setup";
import { getSentimentEmoji } from "@components/executive-view/utils/common";

interface StatsInNumbersProps {
  engagementScores: EngagementScores;
}

export const StatsInNumbers: FC<StatsInNumbersProps> = ({
  engagementScores,
}) => {
  const { executiveViewUIFields } = useContext(ExecutiveContext);
  const { engagementFields } = executiveViewUIFields;
  return (
    <div className="stats-in-numbers">
      {engagementFields.map(({ name, id, isClickAble, type }) => {
        return (
          <div
            className={`stats-in-number ${
              isClickAble ? "stats-in-number-clickable" : ""
            } stats-in-number-${type}`}
            key={id}
          >
            <div className="stats-in-number-header">{name}</div>
            <div className="stats-in-number-value">
              {type === "sentiment"
                ? getSentimentEmoji(engagementScores[id] as string)
                : (engagementScores[id] as any)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
