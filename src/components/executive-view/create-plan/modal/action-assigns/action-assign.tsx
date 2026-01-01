import type { FC } from "react";
import type { CreatePlanAction } from ".";
import { APP_IMAGES } from "@assets/images/app_image";
import { EditIcon } from "@assets/images";

interface ActionAssigneeCardProps {
  createPlanAction: CreatePlanAction;
}

export const ActionAssigneeCard: FC<ActionAssigneeCardProps> = ({
  createPlanAction,
}) => {
  const { type, assignees } = createPlanAction;
  const { name } = assignees[0] || [];
  const noOfAssignees = assignees.length;
  const multipleAssignees = noOfAssignees > 1;
  return (
    <div className="create-action-assign-card">
      <div
        className={`assignees-image ${
          multipleAssignees ? "" : "single-assignee"
        }`}
      >
        {assignees.map(({ image }) => (
          <img src={APP_IMAGES[image]} />
        ))}
      </div>
      <div className="assignees-details">
        <div className="create-action-type">{type}</div>
        <div className="create-action-name">
          {name}
          {multipleAssignees ? ` + ${noOfAssignees}` : ""}
        </div>
      </div>
      <EditIcon className="assignee-edit-icon" />
    </div>
  );
};
