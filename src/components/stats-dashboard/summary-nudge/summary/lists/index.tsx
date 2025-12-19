import type { SummaryStatsList } from "@components/stats-dashboard/types";
import type { FC } from "react";
import "@components/stats-dashboard/summary-nudge/summary/lists/index.scss";

interface SummaryListsProps {
  metrics: SummaryStatsList[];
  header?: string;
  className: string;
}

export const SummaryLists: FC<SummaryListsProps> = ({
  metrics,
  header,
  className,
}) => {
  return (
    <div className={`summary-lists ${className}`}>
      <div className="summary-lists-items">
        {metrics.map(({ name, value }) => (
          <div className="summary-list-item" key={name}>
            <div className="summary-lists-name">{name}</div>
            <div className="summary-lists-value">{value}</div>
          </div>
        ))}
      </div>
      {header && <div className="summary-lists-header">{header}</div>}
    </div>
  );
};
