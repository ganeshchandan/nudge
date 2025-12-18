import { LeftPanel } from "@components/common/left-panel";
import "@components/stats-dashboard/index.scss";
import { StatsDashboardHeader } from "@components/stats-dashboard/header";
import { StatsDashboardOverviewFollowup } from "@components/stats-dashboard/overview-followup";

export const StatsDashboard = () => {
  return (
    <div className="stats-dashboard">
      <LeftPanel />
      <div className="stats-dashboard-content">
        <StatsDashboardHeader />
        <StatsDashboardOverviewFollowup />
      </div>
    </div>
  );
};
