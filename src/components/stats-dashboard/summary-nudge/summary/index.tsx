import "@components/stats-dashboard/summary-nudge/summary/index.scss";
import { SummaryStatsWidget } from "./widgets/stats-widget";
import { ExecutiveMetricsContent } from "./widgets/executive-metrics";

export const StatsDashboardSummary = () => {
  return (
    <div className="stats-dashboard-summary">
      <div className="stats-dashboard-summary-header">
        Account Program Summary
      </div>
      <div className="stats-dashboard-summary-content">
        <div className="summary-content-column">
          <SummaryStatsWidget widgetKey={"executiveMetrics"} value={"56.375"}>
            <ExecutiveMetricsContent />
          </SummaryStatsWidget>
        </div>
        <div className="summary-content-column">
          <SummaryStatsWidget
            widgetKey={"accountLevelScore"}
            value={"56.375"}
          />
          <SummaryStatsWidget
            widgetKey={"programLevelScore"}
            value={"56.375"}
          />
        </div>
      </div>
    </div>
  );
};
