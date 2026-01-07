import "@components/stats-dashboard/overview-followup/index.scss";
import { StatsDashboardOverview } from "@components/stats-dashboard/overview-followup/overview";
//need to remove
// import { StatsDashboardFollowp } from "@components/stats-dashboard/overview-followup/followup";

export const StatsDashboardOverviewFollowup = () => {
  return (
    <div className="stats-dashboard-overview-followup">
      <StatsDashboardOverview />
      {/* <StatsDashboardFollowp /> */}
    </div>
  );
};
