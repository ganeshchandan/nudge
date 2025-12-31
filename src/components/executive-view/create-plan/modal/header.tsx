import { NudgeButton, OUTLINE_PRIMARY_VARIANT } from "@components/common";
import type { FC } from "react";
import type { CreatePlanDetails } from "../types";

interface CreatePlanModalHeaderProps {
  createPlanDetails: CreatePlanDetails;
  setShowCreatePlanModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePlanModalHeader: FC<CreatePlanModalHeaderProps> = ({
  setShowCreatePlanModal,
  createPlanDetails,
}) => {
  const { engagementName } = createPlanDetails;

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
        <NudgeButton isDisabled={engagementName === ""}>
          INITIATE TASKS
        </NudgeButton>
      </div>
    </div>
  );
};
