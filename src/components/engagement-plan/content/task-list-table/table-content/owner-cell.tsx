import { APP_IMAGES } from "@assets/images/app_image";
import type { FC } from "react";

interface OwnerCellProps {
  owner: string;
  imageName: string;
}

export const OwnerCell: FC<OwnerCellProps> = ({ owner, imageName }) => {
  return (
    <div className="table-content-row-cell header-content-row-cell task-owner-cell">
      <img src={APP_IMAGES[imageName]} />
      <div className="task-owner-name">{owner}</div>
    </div>
  );
};
