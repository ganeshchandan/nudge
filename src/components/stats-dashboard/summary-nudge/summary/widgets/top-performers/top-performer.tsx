import { APP_IMAGES } from "@assets/images/app_image";
import type { TopPerformerDetail } from "@components/stats-dashboard/types";
import type { FC } from "react";

interface TopPerformerProps {
  topPerformer: TopPerformerDetail;
}

export const TopPerformer: FC<TopPerformerProps> = ({ topPerformer }) => {
  const { name, awardName, personImage } = topPerformer;
  return (
    <div className="top-performer">
      <div className="top-performer-image">
        <img src={APP_IMAGES[personImage]} />
      </div>
      <div className="top-performer-details">
        <div className="top-performer-name">{name}</div>
        <div className="top-performer-award-name">{awardName}</div>
      </div>
    </div>
  );
};
