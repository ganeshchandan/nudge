import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const OneMinuteSummary = () => {
  const { oneMinuteSummary } = useSelector(
    (state: RootState) => state.leadsDashboard.detailedViewStats
  );
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
