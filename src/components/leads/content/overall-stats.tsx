import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const OverallStatsLists = () => {
  const { atRisk, topConnections, performingVerticals } = useSelector(
    (state: RootState) =>
      state.leadsDashboard.executiveCapitalDetails.overallStats
  );

  return (
    <div className="leads-overall-stats">
      <div className="leads-overall-stat">
        <div className="leads-overall-stat-value">{atRisk}</div>
        <div className="leads-overall-stat-label">At Risk</div>
      </div>
      <div className="leads-overall-stat">
        <div className="leads-overall-stat-value">{topConnections}</div>
        <div className="leads-overall-stat-label">Top Connections</div>
      </div>
      <div className="leads-overall-stat">
        <div className="leads-overall-stat-value">{performingVerticals}</div>
        <div className="leads-overall-stat-label">Performing Verticals</div>
      </div>
    </div>
  );
};
