import { NudgeButton, OUTLINE_PRIMARY_VARIANT } from "@components/common";

export const CreatePlanModalHeader = () => {
  return (
    <div className="create-plan-modal-header">
      <label className="create-plan-modal-header-text">
        Create Engagement Plan
      </label>
      <div className="create-plan-modal-actions">
        <NudgeButton variant={OUTLINE_PRIMARY_VARIANT}>CANCEL</NudgeButton>
        <NudgeButton>INITIATE TASKS</NudgeButton>
      </div>
    </div>
  );
};
