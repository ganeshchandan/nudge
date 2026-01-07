import "@components/stats-dashboard/summary-nudge/summary/index.scss";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";

import {
  ContactWidget,
  CompanyWidget,
} from "@components/stats-dashboard/summary-nudge/summary/widgets";
import { OverflowContainer } from "@components/common";

export const StatsDashboardSummary = () => {
  const { companyProfiles } = useSelector(
    (state: RootState) => state.statsDashboard
  );
  return (
    <div className="stats-dashboard-summary">
      <div className="stats-dashboard-summary-header">
        Program Scorecard Summary
      </div>
      <OverflowContainer>
        <div className="stats-dashboard-summary-content">
          {companyProfiles.map((companyProfile, index) => (
            <CompanyWidget
              key={companyProfile._id}
              companyProfile={companyProfile}
              index={index}
            />
          ))}
          <ContactWidget />
        </div>
      </OverflowContainer>
    </div>
  );
};

{
  /* <div className="scroll-div">
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
      </div> */
}
