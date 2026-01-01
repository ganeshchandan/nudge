import "@components/engagement-plan/content/index.scss";
import { TaskListHeader } from "@components/engagement-plan/content/task-list-header";
import { EngagementPlanTaskList } from "@components/engagement-plan/content/task-list-table";

export const EngagementPlanContent = () => {
  return (
    <div className="engagement-plan-content">
      <TaskListHeader />
      <EngagementPlanTaskList />
    </div>
  );
};
