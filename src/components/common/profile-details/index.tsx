import { APP_IMAGES } from "@assets/images/app_image";
import "@components/common/profile-details/index.scss";
import type { FC } from "react";

interface ProfileDetailsProps {
  className?: string;
  imageUrl: string;
  name: string;
  teamName?: string;
}

export const ProfileDetails: FC<ProfileDetailsProps> = ({
  imageUrl,
  name,
  teamName,
  className = "",
}) => {
  return (
    <div className={`profile-details ${className}`}>
      <img src={APP_IMAGES[imageUrl]} className="profile-details-image" />
      <div className="profile-details-name-company">
        <div className="profile-details-name">{name}</div>
        {teamName && (
          <div className="profile-details-name-team">{teamName}</div>
        )}
      </div>
    </div>
  );
};
