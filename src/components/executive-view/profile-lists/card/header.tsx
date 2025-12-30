import {
  NudgeButton,
  ProfileDetails,
  OUTLINE_PRIMARY_VARIANT,
} from "@components/common";
import { ExecutiveContext } from "@components/executive-view/context/setup";
import { useExecutiveAction } from "@components/executive-view/hooks";
import { useContext, type FC } from "react";

interface ExecutiveViewCardHeaderProps {
  image: string;
  name: string;
  teamName: string;
  id: number;
}

export const ExecutiveViewCardHeader: FC<ExecutiveViewCardHeaderProps> = ({
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
    <div className="executive-view-card-header">
      <ProfileDetails imageUrl={image} name={name} teamName={teamName} />
      <div className="executive-actions">
        <NudgeButton variant={OUTLINE_PRIMARY_VARIANT}>Bookmark</NudgeButton>
        <NudgeButton onClick={onViewDetailsClick}>
          {viewDetailsButtonLabel}
        </NudgeButton>
      </div>
    </div>
  );
};
