import { OverflowContainer } from "@components/common";
import { OwnerCell } from "./owner-cell";
import { Completion } from "./completion";
import { DueDate } from "./due-date";
import { TaskName } from "./task-name";
import {
  NONE_STRING,
  SAMPLE_TASK_DATA,
} from "@components/engagement-plan/constants";

export const TaskListTableContent = () => {
  return (
    <OverflowContainer>
      <div className="task-list-table-content">
        {SAMPLE_TASK_DATA.map(
          ({
            taskId,
            taskName,
            dueDate,
            completion,
            owner,
            imageName,
            status = NONE_STRING,
          }) => (
            <div
              className="table-content-row header-content-row-common"
              key={taskId}
            >
              <TaskName taskName={taskName} status={status} />
              <DueDate dueDate={dueDate} />
              <Completion completion={completion} />
              <OwnerCell owner={owner} imageName={imageName} />
            </div>
          )
        )}
      </div>
    </OverflowContainer>
  );
};
