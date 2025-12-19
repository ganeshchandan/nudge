import type { SummaryExecutiveMetric } from "@components/stats-dashboard/types";
import type { FC } from "react";

interface ExecutiveMetricProps {
  metrics: SummaryExecutiveMetric[];
  header: string;
  className: string;
}

export const ExecutiveMetric: FC<ExecutiveMetricProps> = ({
  metrics,
  header,
  className,
}) => {
  return (
    <div className={`executive-metric ${className}`}>
      <div className="executive-metric-list">
        {metrics.map(({ name, value }) => (
          <div className="executive-metric-list-item" key={name}>
            <div className="executive-metric-name">{name}</div>
            <div className="executive-metric-value">{value}</div>
          </div>
        ))}
      </div>
      <div className="executive-metric-header">{header}</div>
    </div>
  );
};
