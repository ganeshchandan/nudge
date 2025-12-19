import "@components/stats-dashboard/summary-nudge/summary/index.scss";
import { SummaryStatsWidget } from "./widgets/stats-widget";

export const StatsDashboardSummary = () => {
  return (
    <div className="stats-dashboard-summary">
      <div className="stats-dashboard-summary-header">
        Account Program Summary
      </div>
      <div>
        <SummaryStatsWidget widgetKey={"executiveMetrics"} value={"56.375"} />
      </div>
    </div>
  );
};
