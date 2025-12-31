import { NudgeButton, OUTLINE_PRIMARY_VARIANT } from "@components/common";
import type { FC } from "react";

interface CreatePlanModalHeaderProps {
  setShowCreatePlanModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePlanModalHeader: FC<CreatePlanModalHeaderProps> = ({
  setShowCreatePlanModal,
}) => {
  const onCancelClick = () => {
    setShowCreatePlanModal(false);
  };
  return (
    <div className="create-plan-modal-header">
      <label className="create-plan-modal-header-text">
        Create Engagement Plan
      </label>
      <div className="create-plan-modal-actions">
        <NudgeButton variant={OUTLINE_PRIMARY_VARIANT} onClick={onCancelClick}>
          CANCEL
        </NudgeButton>
        <NudgeButton>INITIATE TASKS</NudgeButton>
      </div>
    </div>
  );
};
