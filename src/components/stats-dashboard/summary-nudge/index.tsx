import { StatsDashboardSummary } from "@components/stats-dashboard/summary-nudge/summary";
import "@components/stats-dashboard/summary-nudge/index.scss";
import { NudgeChat } from "./nudge";

export const StatsSummaryNudge = () => {
  return (
    <div className="stats-dashboard-summary-nudge">
      <StatsDashboardSummary />
      <NudgeChat />
    </div>
  );
};
