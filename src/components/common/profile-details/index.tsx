import { APP_IMAGES } from "@assets/images/app_image";
import "@components/common/profile-details/index.scss";
import type { FC } from "react";

interface ProfileDetailsProps {
  imageUrl: string;
  name: string;
  teamName: string;
}

export const ProfileDetails: FC<ProfileDetailsProps> = ({
  imageUrl,
  name,
  teamName,
}) => {
  return (
    <div className="profile-details">
      <img src={APP_IMAGES[imageUrl]} className="profile-details-image" />
      <div className="profile-details-name-company">
        <div className="profile-details-name">{name}</div>
        <div className="profile-details-name-team">{teamName}</div>
      </div>
    </div>
  );
};
