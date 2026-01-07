import "@components/engagement-plan/content/task-list-table/index.scss";
import { TaskTableHeader } from "@components/engagement-plan/content/task-list-table/headers";
import { TaskListTableContent } from "@components/engagement-plan/content/task-list-table/table-content";

export const EngagementPlanTaskList = () => {
  return (
    <div className="engagement-plan-task-list">
      <TaskTableHeader />
      <TaskListTableContent />
    </div>
  );
};
