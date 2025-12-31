import { CreatePlanModalHeader } from "@components/executive-view/create-plan/modal/header";
import { EngagementDetails } from "@components/executive-view/create-plan/modal/engagement-details";
import { CreatePlanActions } from "@components/executive-view/create-plan/modal/action-assigns";
import type { FC } from "react";

interface CreatePlanModalProps {
  setShowCreatePlanModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePlanModal: FC<CreatePlanModalProps> = ({
  setShowCreatePlanModal,
}) => {
  return (
    <div className="create-plan-modal-content">
      <CreatePlanModalHeader setShowCreatePlanModal={setShowCreatePlanModal} />
      <div className="creator-details">
        Owner | <strong>You</strong>
      </div>
      <EngagementDetails />
      <CreatePlanActions
        createPlanActions={[
          {
            type: "Facilitator",
            assignees: [
              {
                name: "Sudy",
                id: "assignee1",
                image: "assignee1",
              },
            ],
          },
          {
            type: "R11 Strategist",
            assignees: [
              {
                name: "Sudy",
                id: "assignee2",
                image: "assignee2",
              },
            ],
          },
          {
            type: "Influencers",
            assignees: [
              {
                name: "Jasper",
                id: "assignee3",
                image: "assignee3",
              },
              {
                name: "Jasper",
                id: "assignee4",
                image: "assignee4",
              },
              {
                name: "Jasper",
                id: "assignee5",
                image: "assignee5",
              },
              {
                name: "Jasper",
                id: "assignee6",
                image: "assignee6",
              },
            ],
          },
          {
            type: "Autonomous Influencers",
            assignees: [
              {
                name: "Jasper",
                id: "assignee3",
                image: "assignee3",
              },
            ],
          },
        ]}
      />
    </div>
  );
};
