import type { ExecutiveOverallStats } from "../types";
import type { FC } from "react";

interface OverallStatsListsProps {
  overallStats: ExecutiveOverallStats;
}

export const OverallStatsLists: FC<OverallStatsListsProps> = ({
  overallStats,
}) => {
  const { atRisk, topConnections, performingVerticals } = overallStats;

  return (
    <div className="executive-overall-stats">
      <div className="executive-overall-stat">
        <div className="executive-overall-stat-value">{atRisk}</div>
        <div className="executive-overall-stat-label">At Risk</div>
      </div>
      <div className="executive-overall-stat">
        <div className="executive-overall-stat-value">{topConnections}</div>
        <div className="executive-overall-stat-label">Top Connections</div>
      </div>
      <div className="executive-overall-stat">
        <div className="executive-overall-stat-value">
          {performingVerticals}
        </div>
        <div className="executive-overall-stat-label">Performing Verticals</div>
      </div>
    </div>
  );
};
