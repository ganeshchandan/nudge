import { NudgeButton, NudgeModal } from "@components/common";
import { useState } from "react";
import "@components/executive-view/create-plan/index.scss";
import { CreatePlanModal } from "@components/executive-view/create-plan/modal";

export const CreatePlan = () => {
  const [showCreatePlanModal, setShowCreatePlanModal] = useState<boolean>(true);

  const createPlanClick = () => setShowCreatePlanModal(true);

  return (
    <>
      <NudgeButton className="create-plan-button" onClick={createPlanClick}>
        create plan
      </NudgeButton>
      <NudgeModal
        show={showCreatePlanModal}
        centered
        className="create-plan-modal"
      >
        <CreatePlanModal />
      </NudgeModal>
    </>
  );
};
