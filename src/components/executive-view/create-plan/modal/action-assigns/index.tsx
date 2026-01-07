import type { FC } from "react";
import { ActionAssigneeCard } from "./action-assign";

export type ActionAssignee = {
  name: string;
  id: string;
  image: string;
};

export interface CreatePlanAction {
  type: string;
  assignees: ActionAssignee[];
}

export interface CreatePlanActionsProps {
  createPlanActions: CreatePlanAction[];
}

export const CreatePlanActions: FC<CreatePlanActionsProps> = ({
  createPlanActions,
}) => {
  return (
    <div className="create-plan-action-cards">
      {createPlanActions.map((createPlanAction) => (
        <ActionAssigneeCard
          createPlanAction={createPlanAction}
          key={createPlanAction.type}
        />
      ))}
    </div>
  );
};
