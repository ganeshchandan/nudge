import { ExecutiveContext } from "@components/executive-view/context/setup";
import type { ExecutiveOverallStats } from "@components/executive-view/types";
import { useContext, type FC } from "react";

interface OverallStatsListsProps {
  overallStats: ExecutiveOverallStats;
}

export const OverallStatsLists: FC<OverallStatsListsProps> = ({
  overallStats,
}) => {
  const { executiveViewUIFields } = useContext(ExecutiveContext);
  const { overallStatsFields } = executiveViewUIFields;

  return (
    <div className="executive-overall-stats">
      {overallStatsFields.map(({ name, id }) => {
        return (
          <div className="executive-overall-stat" key={id}>
            <div className="executive-overall-stat-value">
              {overallStats[id as keyof ExecutiveOverallStats]}
            </div>
            <div className="executive-overall-stat-label">{name}</div>
          </div>
        );
      })}
    </div>
  );
};
