import { LeftPanel } from "@components/left-panel";
import "@components/stats-dashboard/index.scss";
import { StatsDashboardHeader } from "@components/stats-dashboard/header";
import { StatsDashboardOverviewFollowup } from "@components/stats-dashboard/overview-followup";
import { StatsSummaryNudge } from "@components/stats-dashboard/summary-nudge";

export const Leads = () => {
  return (
    <div className="leads-dashboard">
      <LeftPanel />
      <div className="stats-dashboard-content">
        <StatsDashboardHeader />
        <StatsDashboardOverviewFollowup />
        <StatsSummaryNudge />
      </div>
    </div>
  );
};
