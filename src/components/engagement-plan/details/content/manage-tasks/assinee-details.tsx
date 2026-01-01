import {
  NudegeTag,
  OverflowContainer,
  ProfileDetails,
} from "@components/common";
import { ManageTaskTitleContent } from "./title-content";

export const AssineeDetails = () => {
  return (
    <OverflowContainer>
      <div className="assinee-details">
        <ManageTaskTitleContent title="Assignee">
          <ProfileDetails
            imageUrl={"userIcon3"}
            name={"Jasper Dsouza"}
            className="mange-task-profile-details"
          />
        </ManageTaskTitleContent>
        <ManageTaskTitleContent title="Reportee">
          <ProfileDetails
            imageUrl={"userIcon4"}
            name={"Manish Gupta"}
            className="mange-task-profile-details"
          />
        </ManageTaskTitleContent>
        <ManageTaskTitleContent title="Priority">
          <NudegeTag tagName={"High"} className="plan-priority" />
        </ManageTaskTitleContent>
        <ManageTaskTitleContent title="Status">
          <NudegeTag tagName={"In Progress"} className="plan-status" />
        </ManageTaskTitleContent>
        <ManageTaskTitleContent title="Due Date">
          <div className="plan-due-date">Sep 28, 2025</div>
        </ManageTaskTitleContent>
      </div>
    </OverflowContainer>
  );
};
