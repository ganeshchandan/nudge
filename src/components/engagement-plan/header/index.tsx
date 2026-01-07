import { ProfileDetails } from "@components/common";
import { Doughnut } from "@components/common/chart/doughnut";
import "@components/engagement-plan/header/index.scss";
import { type FC } from "react";

interface EngagementPlanHeaderProps {
  manageTaskEnabled: boolean;
  onManageTaskToggle: (enabled: boolean) => void;
}

export const EngagementPlanHeader: FC<EngagementPlanHeaderProps> = ({
  manageTaskEnabled,
  onManageTaskToggle,
}) => {
  return (
    <div className="engagement-plan-header">
      <ProfileDetails
        imageUrl={"company1"}
        name={"Murdo Gordon  Connect"}
        teamName={"Amgen AI Pitch"}
      />
      {manageTaskEnabled && (
        <div className="progress-bar">
          <Doughnut
            size="2.875rem"
            strokeWidth="0.313rem"
            storke="#4DA828"
            value={40}
            id={"engagement-plan-progress"}
          />
        </div>
      )}
      <div className="header-right-section">
        {!manageTaskEnabled && (
          <div className="account-relationship">
            <span className="account-relationship-label">
              Account Relationship
            </span>
            <span className="account-relationship-indicator">🤩 Hot</span>
          </div>
        )}
        <div className="manage-task-toggle">
          <span className="manage-task-label">Manage Task</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={manageTaskEnabled}
              onChange={(e) => onManageTaskToggle(e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
