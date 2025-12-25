import { StatsUpIcon } from "@assets/images";
import type { LeadsDetailStat } from "@components/leads/types";
import type { FC } from "react";

interface LeadsDetailItemProps {
  executiveCapitalDetails: LeadsDetailStat[];
  showProgress: boolean;
}

export const LeadsDetailList: FC<LeadsDetailItemProps> = ({
  executiveCapitalDetails,
  showProgress,
}) => {
  return (
    <ul className="leads-capital-detail-list">
      {executiveCapitalDetails.map(({ name }) => (
        <li className="leads-capital-detail-list-item">
          {showProgress && <StatsUpIcon className="leads-stats-up-icon" />}
          {name}
        </li>
      ))}
    </ul>
  );
};
