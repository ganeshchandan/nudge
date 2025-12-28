import type { DetailedViewStats } from "@components/executive-view/types";
import type { FC } from "react";

interface OneMinuteSummaryProps {
  detailedViewStats: DetailedViewStats;
}

export const OneMinuteSummary: FC<OneMinuteSummaryProps> = ({
  detailedViewStats,
}) => {
  const { oneMinuteSummary } = detailedViewStats;
  return (
    <div className="detailed-view-one-minute-summary">
      <div className="one-minute-summary-header">1 Minute Summary</div>
      <div className="one-minute-summaries">
        {oneMinuteSummary.map(({ content }, index) => (
          <div className="one-minute-summary" key={index}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};
