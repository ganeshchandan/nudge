import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton } from "@components/common/button";
import { OUTLINE_PRIMARY_VARIANT } from "@components/common/button/constants";
import type { ExecutiveCapital } from "@components/leads/types";
import type { FC } from "react";

interface ExecutiveCapitalCardProps {
  executiveCapital: ExecutiveCapital;
}

export const ExecutiveCapitalCard: FC<ExecutiveCapitalCardProps> = ({
  executiveCapital,
}) => {
  const { image, name, teamName } = executiveCapital;
  return (
    <div className="executive-capital-list-card">
      <div className="overall-details">
        <img
          src={APP_IMAGES[image]}
          className="executive-capital-list-card-image"
        />
        <div className="executive-details-action">
          <div className="executive-name-details">
            <div className="executive-name">{name}</div>
            <div className="executive-team">{teamName}</div>
          </div>
          <div className="executive-actions">
            <NudgeButton variant={OUTLINE_PRIMARY_VARIANT}>
              Bookmark
            </NudgeButton>
            <NudgeButton>VIEW DETAILS</NudgeButton>
          </div>
        </div>
      </div>
    </div>
  );
};
