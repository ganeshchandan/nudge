import "@components/stats-dashboard/summary-nudge/summary/index.scss";
import { SummaryLists } from "@components/stats-dashboard/summary-nudge/summary/lists";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";
import {
  TopPerformers,
  SummaryStatsWidget,
  ExecutiveMetricsContent,
  ContactWidget,
  ProgramView,
} from "@components/stats-dashboard/summary-nudge/summary/widgets";

export const StatsDashboardSummary = () => {
  const { accountLevelScore, programLevelScore } = useSelector(
    (state: RootState) => state.statsDashboard.accountSummary
  );
  return (
    <div className="stats-dashboard-summary">
      <div className="stats-dashboard-summary-header">
        Account Program Summary
      </div>
      <div className="scroll-div">
        <div className="stats-dashboard-summary-content">
          <div className="summary-content-column">
            <SummaryStatsWidget widgetKey={"executiveMetrics"} value={"56.375"}>
              <ExecutiveMetricsContent />
            </SummaryStatsWidget>
            <ContactWidget />
          </div>
          <div className="summary-content-column">
            <SummaryStatsWidget
              widgetKey={"accountLevelScore"}
              value={"56.375"}
            >
              <SummaryLists
                metrics={accountLevelScore}
                className={"accountLevelScore"}
              />
            </SummaryStatsWidget>
            <SummaryStatsWidget
              widgetKey={"programLevelScore"}
              value={"56.375"}
            >
              <SummaryLists
                metrics={programLevelScore}
                className={"accountLevelScore"}
              />
            </SummaryStatsWidget>
          </div>
          <div className="summary-content-column">
            <TopPerformers />
            <ProgramView />
          </div>
        </div>
      </div>
    </div>
  );
};
