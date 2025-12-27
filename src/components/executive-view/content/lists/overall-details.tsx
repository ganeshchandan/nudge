import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton } from "@components/common/button";
import { OUTLINE_PRIMARY_VARIANT } from "@components/common/button/constants";
import { ExecutiveContext } from "@components/executive-view/context/setup";
import { useExecutiveAction } from "@components/executive-view/hooks";
import { useContext, type FC } from "react";

interface OverallDetailsProps {
  image: string;
  name: string;
  teamName: string;
  id: number;
}

export const OverallDetails: FC<OverallDetailsProps> = ({
  image,
  name,
  teamName,
  id,
}) => {
  const { executiveViewUIFields } = useContext(ExecutiveContext);
  const { viewDetailsButtonLabel } = executiveViewUIFields;
  const { onExecutiveIdSelect } = useExecutiveAction();

  const onViewDetailsClick = () => onExecutiveIdSelect(id);

  return (
    <div className="overall-details">
      <img src={APP_IMAGES[image]} className="executive-list-card-image" />
      <div className="executive-details-action">
        <div className="executive-name-details">
          <div className="executive-name">{name}</div>
          <div className="executive-team">{teamName}</div>
        </div>
        <div className="executive-actions">
          <NudgeButton variant={OUTLINE_PRIMARY_VARIANT}>Bookmark</NudgeButton>
          <NudgeButton onClick={onViewDetailsClick}>
            {viewDetailsButtonLabel}
          </NudgeButton>
        </div>
      </div>
    </div>
  );
};
