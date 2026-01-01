import { TimerIcon } from "@assets/images";
import {
  NudgeButton,
  OUTLINE_PRIMARY_VARIANT,
  ProfileDetails,
} from "@components/common";
import { Doughnut } from "@components/common/chart/doughnut";
import "@components/engagement-plan/header/index.scss";

export const EngagementPlanHeader = () => {
  return (
    <div className="engagement-plan-header">
      <ProfileDetails
        imageUrl={"company1"}
        name={"Murdo Gordon  Connect"}
        teamName={"Amgen AI Pitch"}
      />
      <div className="progress-bar">
        <Doughnut
          size="2.875rem"
          strokeWidth="0.313rem"
          storke="#4DA828"
          value={40}
          id={"engagement-plan-progress"}
        />
      </div>
      <div className="pause-and-timer-details">
        <div className="remaining-timer">123D : 12H : 23M : 30S</div>
        <NudgeButton
          variant={OUTLINE_PRIMARY_VARIANT}
          className="pause-timer-button"
        >
          <TimerIcon className="pause-timer-icon" />
          PAUSE timer
        </NudgeButton>
      </div>
    </div>
  );
};
