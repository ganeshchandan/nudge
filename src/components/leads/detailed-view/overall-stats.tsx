import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton } from "@components/common/button";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";
import { StatsInNumbers } from "./stats-in-number";

export const DetailedOverallStats = () => {
  const { name, teamName, image } = useSelector(
    (state: RootState) => state.leadsDashboard.detailedViewStats
  );
  return (
    <div className="detailed-view-overall-stats">
      <div className="detailed-view-image-name">
        <img src={APP_IMAGES[image]} className="detailed-view-card-image" />
        <div className="leads-name-details">
          <div className="leads-name">{name}</div>
          <div className="leads-team">{teamName}</div>
        </div>
      </div>
      <StatsInNumbers />
      <div className="detailed-view-leads-actions">
        <NudgeButton className="create-plan-button">create plan</NudgeButton>
      </div>
    </div>
  );
};
