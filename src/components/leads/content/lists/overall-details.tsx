import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton } from "@components/common/button";
import { OUTLINE_PRIMARY_VARIANT } from "@components/common/button/constants";
import type { FC } from "react";

interface OverallDetailsProps {
  image: string;
  name: string;
  teamName: string;
}

export const OverallDetails: FC<OverallDetailsProps> = ({
  image,
  name,
  teamName,
}) => {
  return (
    <div className="overall-details">
      <img src={APP_IMAGES[image]} className="leads-list-card-image" />
      <div className="leads-details-action">
        <div className="leads-name-details">
          <div className="leads-name">{name}</div>
          <div className="leads-team">{teamName}</div>
        </div>
        <div className="leads-actions">
          <NudgeButton variant={OUTLINE_PRIMARY_VARIANT}>Bookmark</NudgeButton>
          <NudgeButton>VIEW DETAILS</NudgeButton>
        </div>
      </div>
    </div>
  );
};
