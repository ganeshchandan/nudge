import "@components/stats-dashboard/summary-nudge/summary/index.scss";
import { SummaryStatsWidget } from "./widgets/stats-widget";
import { ExecutiveMetricsContent } from "./widgets/executive-metrics";
import { SummaryLists } from "./lists";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const StatsDashboardSummary = () => {
  const { accountLevelScore, programLevelScore } = useSelector(
    (state: RootState) => state.statsDashbaord.accountSummary
  );
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
          <SummaryStatsWidget widgetKey={"accountLevelScore"} value={"56.375"}>
            <SummaryLists
              metrics={accountLevelScore}
              className={"accountLevelScore"}
            />
          </SummaryStatsWidget>
          <SummaryStatsWidget widgetKey={"programLevelScore"} value={"56.375"}>
            <SummaryLists
              metrics={programLevelScore}
              className={"accountLevelScore"}
            />
          </SummaryStatsWidget>
        </div>
      </div>
    </div>
  );
};
