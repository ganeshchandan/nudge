import { StatsInNumbers } from "./stats-in-numbers";
import type { DetailedViewStats } from "@components/executive-view/types";
import type { FC } from "react";
import { ProfileDetails } from "@components/common";
import { CreatePlan } from "@components/executive-view/create-plan";

interface DetailedOverallStatsProps {
  detailedViewStats: DetailedViewStats;
}

export const DetailedOverallStats: FC<DetailedOverallStatsProps> = ({
  detailedViewStats,
}) => {
  const { name, teamName, image, engagementScores } = detailedViewStats;
  return (
    <div className="detailed-view-overall-stats">
      <ProfileDetails imageUrl={image} name={name} teamName={teamName} />
      <StatsInNumbers engagementScores={engagementScores} />
      <div className="detailed-view-executive-actions">
        <CreatePlan />
      </div>
    </div>
  );
};
