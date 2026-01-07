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
  // Check if imageUrl is a URL or an APP_IMAGES key
  const imageSrc = imageUrl.startsWith("http") || imageUrl.startsWith("/") 
    ? imageUrl 
    : APP_IMAGES[imageUrl] || imageUrl;

  return (
    <div className={`profile-details ${className}`}>
      <div className="profile-details-image-wrapper">
        <img src={imageSrc} className="profile-details-image" alt={name} />
      </div>
      <div className="profile-details-name-company">
        <div className="profile-details-name">{name}</div>
        {teamName && (
          <div className="profile-details-name-team">{teamName}</div>
        )}
      </div>
    </div>
  );
};
