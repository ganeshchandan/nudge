import "@components/leads/detailed-view/index.scss";
import { DetailedOverallStats } from "@components/leads/detailed-view/overall-stats";
import { DetailedViewContent } from "@components/leads/detailed-view/content";
import { LeftIcon } from "@assets/images";

export const LeadsDetailedView = () => {
  return (
    <div className="leads-detailed-view">
      <div className="detailed-view-back-button">
        <LeftIcon className="detailed-view-back-button-icon" />
      </div>
      <DetailedOverallStats />
      <DetailedViewContent />
    </div>
  );
};
