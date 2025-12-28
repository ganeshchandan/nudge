import "@components/stats-dashboard/index.scss";
import { StatsDashboardHeader } from "@components/stats-dashboard/header";
import { StatsDashboardOverviewFollowup } from "@components/stats-dashboard/overview-followup";
import { StatsSummaryNudge } from "@components/stats-dashboard/summary-nudge";

export const StatsDashboard = () => {
  return (
    <div className="stats-dashboard-content smooth-content-load">
      <StatsDashboardHeader />
      <StatsDashboardOverviewFollowup />
      <StatsSummaryNudge />
    </div>
  );
};
