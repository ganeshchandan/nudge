import { StatsInNumbers } from "./stats-in-numbers";
import type { DetailedViewStats } from "@components/executive-view/types";
import { useContext, type FC } from "react";
import { ProfileDetails } from "@components/common";
import { CreatePlan } from "@components/executive-view/create-plan";
import { ExecutiveContext } from "@components/executive-view/context/setup";

interface DetailedOverallStatsProps {
  detailedViewStats: DetailedViewStats;
}

export const DetailedOverallStats: FC<DetailedOverallStatsProps> = ({
  detailedViewStats,
}) => {
  const { typeOfView } = useContext(ExecutiveContext);
  const { name, teamName, image, engagementScores } = detailedViewStats;
  const hideImage = typeOfView === "lines";
  
  return (
    <div className="detailed-view-overall-stats">
      {hideImage ? (
        <div className="profile-details">
          <div className="profile-details-name-company">
            <div className="profile-details-name">{name}</div>
            {teamName && (
              <div className="profile-details-name-team">
                {teamName}
              </div>
            )}
          </div>
        </div>
      ) : (
        <ProfileDetails imageUrl={image} name={name} teamName={teamName} />
      )}
      <StatsInNumbers engagementScores={engagementScores} />
      <div className="detailed-view-executive-actions">
        <CreatePlan />
      </div>
    </div>
  );
};
