import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const OverallStatsLists = () => {
  const { atRisk, topConnections, performingVerticals } = useSelector(
    (state: RootState) =>
      state.leadsDashboard.executiveCapitalDetails.overallStats
  );

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
