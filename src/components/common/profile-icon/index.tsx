import { APP_IMAGES } from "@assets/images/app_image";
import { memo, type CSSProperties } from "react";
import "@components/common/profile-icon/index.scss";

interface ProfileIconProps {
  className?: string;
  image: string;
  style?: CSSProperties;
}

export const ProfileIcon = memo(
  ({ image, className = "", style = {} }: ProfileIconProps) => {
    return (
      <div className={`profile-icon ${className}`} style={style}>
        <div className="profile-icon-image">
          <img src={APP_IMAGES[image]}></img>
        </div>
      </div>
    );
  }
);
