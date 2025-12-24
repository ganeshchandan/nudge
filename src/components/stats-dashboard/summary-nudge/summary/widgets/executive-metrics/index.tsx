import { useSelector } from "react-redux";
import type { RootState } from "@stores";
import "@components/stats-dashboard/summary-nudge/summary/widgets/executive-metrics/index.scss";
import { SummaryLists } from "../../lists";

export const ExecutiveMetricsContent = () => {
  const { engageement, relationship, strategic, business } = useSelector(
    (state: RootState) => state.statsDashboard.accountSummary.executiveMetrics
  );
  return (
    <div className="executive-metrics">
      <SummaryLists
        metrics={engageement}
        header="engageement"
        className="engageement"
      />
      <SummaryLists
        metrics={relationship}
        header="relationship"
        className="relationship"
      />
      <SummaryLists
        metrics={strategic}
        header="strategic"
        className="strategic"
      />
      <SummaryLists metrics={business} header="business" className="business" />
    </div>
  );
};
