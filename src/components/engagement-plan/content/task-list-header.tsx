import { NotificationIcon, PlusIcon } from "@assets/images";
import { APP_IMAGES } from "@assets/images/app_image";
import { NudgeButton, OUTLINE_PRIMARY_VARIANT } from "@components/common";

export const TaskListHeader = () => {
  return (
    <div className="task-list-header">
      <div className="task-list-header-text">Task List</div>
      <div className="task-list-actions">
        <NudgeButton
          variant={OUTLINE_PRIMARY_VARIANT}
          className="add-task-button"
        >
          <PlusIcon className="add-taks-button-icon" />
          Add task
        </NudgeButton>
        <div className="notification-social">
          <img src={APP_IMAGES.teams} className="teams-icon" />
          <NotificationIcon className="notification-icon" />
        </div>
      </div>
    </div>
  );
};
