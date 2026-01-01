import { ProfileDetails } from "@components/common";
import { DANGER_STRING } from "@components/engagement-plan/constants";
import type { TaskListStatus } from "@components/engagement-plan/types";
import type { FC } from "react";

interface OwnerCellProps {
  owner: string;
  imageName: string;
  status: TaskListStatus;
}

export const OwnerCell: FC<OwnerCellProps> = ({ owner, imageName, status }) => {
  return (
    <div className="table-content-row-cell header-content-row-cell task-owner-cell">
      <ProfileDetails
        className="owner-details"
        imageUrl={imageName}
        name={owner}
      />
      {status === DANGER_STRING && <div className="notify-text">NOTIFY</div>}
    </div>
  );
};
