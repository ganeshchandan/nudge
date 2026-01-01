import { ErrorIcon, SuccessIcon } from "@assets/images";
import { NudgeCheckbox } from "@components/common";
import type { TaskListStatus } from "@components/engagement-plan/types";
import type { FC } from "react";

const STATUS_ICON_MAPPER: Record<
  TaskListStatus,
  FC<React.SVGProps<SVGSVGElement>>
> = {
  none: () => "",
  completed: SuccessIcon,
  danger: ErrorIcon,
};

interface TaskNameProps {
  taskName: string;
  status: TaskListStatus;
}

export const TaskName: FC<TaskNameProps> = ({ taskName, status }) => {
  const StatusIcon = STATUS_ICON_MAPPER[status];
  return (
    <div className="table-content-row-cell header-content-row-cell task-name-cell">
      <div className="task-name-actions">
        <NudgeCheckbox />
        <StatusIcon className={`task-status-icon ${status}-icon`} />
      </div>
      <label>{taskName}</label>
    </div>
  );
};
