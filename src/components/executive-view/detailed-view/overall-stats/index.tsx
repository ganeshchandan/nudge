import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton } from "@components/common/button";
import { StatsInNumbers } from "./stats-in-numbers";
import type { DetailedViewStats } from "@components/executive-view/types";
import type { FC } from "react";

interface DetailedOverallStatsProps {
  detailedViewStats: DetailedViewStats;
}

export const DetailedOverallStats: FC<DetailedOverallStatsProps> = ({
  detailedViewStats,
}) => {
  const { name, teamName, image, engagementScores } = detailedViewStats;
  return (
    <div className="detailed-view-overall-stats">
      <div className="detailed-view-image-name">
        <img src={APP_IMAGES[image]} className="detailed-view-card-image" />
        <div className="executive-name-details">
          <div className="executive-name">{name}</div>
          <div className="executive-team">{teamName}</div>
        </div>
      </div>
      <StatsInNumbers engagementScores={engagementScores} />
      <div className="detailed-view-executive-actions">
        <NudgeButton className="create-plan-button">create plan</NudgeButton>
      </div>
    </div>
  );
};
