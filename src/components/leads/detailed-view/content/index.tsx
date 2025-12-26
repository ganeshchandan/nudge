import { OneMinuteSummary } from "./one-minute-summary";
import "@components/leads/detailed-view/content/index.scss";

export const DetailedViewContent = () => {
  return (
    <div className="detailed-view-content">
      <OneMinuteSummary />
    </div>
  );
};
