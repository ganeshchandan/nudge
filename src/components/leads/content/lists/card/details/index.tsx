import type { FC } from "react";
import {
  COMPONENT_TYPE_MAPPER,
  LeadsCardDetailItem,
} from "@components/leads/content/lists/card/details/item";
import { EXECUTIVE_CAPITAL_DETAILS } from "@components/leads/content/lists/card/details/constants";
import type { LeadsDetailsStats } from "@components/leads/types";

export interface LeadsCardDetailsProps {
  detailsStats: LeadsDetailsStats;
}

export const LeadsCardDetails: FC<LeadsCardDetailsProps> = ({
  detailsStats,
}) => {
  return (
    <div className="leads-card-details">
      {EXECUTIVE_CAPITAL_DETAILS.map(({ name, id, showProgress }) => {
        const Component = COMPONENT_TYPE_MAPPER[id];
        return (
          <LeadsCardDetailItem label={name} key={id}>
            {Component && (
              <Component
                executiveCapitalDetails={detailsStats[id] as any}
                showProgress={showProgress}
              />
            )}
          </LeadsCardDetailItem>
        );
      })}
    </div>
  );
};
