import { StatsUpIcon } from "@assets/images";
import type { ExecutiveStatDetail } from "@components/executive-view/types";
import type { FC } from "react";

interface ExecutiveViewDetailItemProps {
  executiveCapitalDetails: ExecutiveStatDetail[];
  showProgress: boolean;
}

export const ExecutiveViewDetailList: FC<ExecutiveViewDetailItemProps> = ({
  executiveCapitalDetails,
  showProgress,
}) => {
  return (
    <ul className="executive-capital-detail-list">
      {executiveCapitalDetails.map(({ name }) => (
        <li className="executive-capital-detail-list-item">
          {showProgress && <StatsUpIcon className="executive-stats-up-icon" />}
          {name}
        </li>
      ))}
    </ul>
  );
};
