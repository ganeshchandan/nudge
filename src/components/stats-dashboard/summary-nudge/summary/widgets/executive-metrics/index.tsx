import { useSelector } from "react-redux";
import { ExecutiveMetric } from "./metric";
import type { RootState } from "@stores";
import "@components/stats-dashboard/summary-nudge/summary/widgets/executive-metrics/index.scss";

export const ExecutiveMetricsContent = () => {
  const { engageement, relationship, strategic, business } = useSelector(
    (state: RootState) => state.statsDashbaord.accountSummary.executiveMetrics
  );
  return (
    <div className="executive-metrics">
      <ExecutiveMetric
        metrics={engageement}
        header="engageement"
        className="engageement"
      />
      <ExecutiveMetric
        metrics={relationship}
        header="relationship"
        className="relationship"
      />
      <ExecutiveMetric
        metrics={strategic}
        header="strategic"
        className="strategic"
      />
      <ExecutiveMetric
        metrics={business}
        header="business"
        className="business"
      />
    </div>
  );
};
