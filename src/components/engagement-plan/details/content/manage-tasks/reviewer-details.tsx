import { NudgeButton, ProfileDetails } from "@components/common";
import { ManageTaskTitleContent } from "@components/engagement-plan/details/content/manage-tasks/title-content";

export const ReviewerDetails = () => {
  return (
    <div className="reviewer-details">
      <ManageTaskTitleContent title="Reviewer">
        <ProfileDetails
          imageUrl={"userIcon2"}
          name={"Sharanjit"}
          className="mange-task-profile-details"
        />
      </ManageTaskTitleContent>
      <NudgeButton isDisabled={true} className="plan-mark-complete-button">
        MARK COMPLETE
      </NudgeButton>
    </div>
  );
};
