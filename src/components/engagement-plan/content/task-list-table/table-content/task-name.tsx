import { NudgeCheckbox } from "@components/common";
import type { FC } from "react";

interface TaskNameProps {
  taskName: string;
}

export const TaskName: FC<TaskNameProps> = ({ taskName }) => {
  return (
    <div className="table-content-row-cell header-content-row-cell task-name-cell">
      <div className="task-name-actions">
        <NudgeCheckbox />
      </div>
      <label>{taskName}</label>
    </div>
  );
};
