import { LeftIcon } from "@assets/images";
import "@components/common/back-button/index.scss";
import type { FC } from "react";

interface DetailedViewBackButtonProps {
  onBack?: () => void;
}

export const DetailedViewBackButton: FC<DetailedViewBackButtonProps> = ({
  onBack,
}) => {
  return (
    <div className="detailed-view-back-button" onClick={onBack}>
      <LeftIcon className="detailed-view-back-button-icon" />
    </div>
  );
};
