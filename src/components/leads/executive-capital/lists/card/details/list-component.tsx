import { StatsUpIcon } from "@assets/images";
import type { ExecutiveCapitalDetailStat } from "@components/leads/types";
import type { FC } from "react";

interface ExecutiveCapitalDetailItemProps {
  executiveCapitalDetails: ExecutiveCapitalDetailStat[];
  showProgress: boolean;
}

export const ExecutiveCapitalDetailList: FC<
  ExecutiveCapitalDetailItemProps
> = ({ executiveCapitalDetails, showProgress }) => {
  return (
    <ul className="executive-capital-detail-list">
      {executiveCapitalDetails.map(({ name }) => (
        <li className="executive-capital-detail-list-item">
          {showProgress && (
            <StatsUpIcon className="executive-capital-stats-up-icon" />
          )}
          {name}
        </li>
      ))}
    </ul>
  );
};
