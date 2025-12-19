import { NudgeWidget } from "@components/common/widget";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";
import { TopPerformer } from "@components/stats-dashboard/summary-nudge/summary/widgets/top-performers/top-performer";
import "@components/stats-dashboard/summary-nudge/summary/widgets/top-performers/index.scss";

export const TopPerformers = () => {
  const topPerformers = useSelector(
    (state: RootState) => state.statsDashbaord.accountSummary.topPerformers
  );
  return (
    <NudgeWidget className="top-performer-widget">
      <div className="top-performer-header">Top Performers</div>
      <div className="top-performers">
        {topPerformers.map((topPerformer, index) => (
          <TopPerformer key={index} topPerformer={topPerformer} />
        ))}
      </div>
      <div className="performance-report-link">PERFORMANCE REPORT</div>
    </NudgeWidget>
  );
};
