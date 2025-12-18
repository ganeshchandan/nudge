import "@components/stats-dashboard/overview-followup/index.scss";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const StatsDashboardFollowp = () => {
  const followUp = useSelector(
    (state: RootState) => state.statsDashbaord.followUp
  );
  return (
    <div className="stats-dashboard-followup">
      <div className="overview-item-details">
        <div className="overview-item-value">{followUp}</div>
        <div className="overview-item-label">Follow Up</div>
      </div>
      <div className="stats-dashboard-followup-indicator"></div>
    </div>
  );
};
