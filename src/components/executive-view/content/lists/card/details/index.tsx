import type { FC } from "react";
import {
  COMPONENT_TYPE_MAPPER,
  ExecutiveViewDetailItem,
} from "@components/executive-view/content/lists/card/details/item";
import { EXECUTIVE_CAPITAL_DETAILS } from "@components/executive-view/content/lists/card/details/constants";
import type { ExecutiveStatsDetail } from "@components/executive-view/types";

export interface ExecutiveViewCardDetailsProps {
  detailsStats: ExecutiveStatsDetail;
}

export const ExecutiveViewCardDetails: FC<ExecutiveViewCardDetailsProps> = ({
  detailsStats,
}) => {
  return (
    <div className="executive-card-details">
      {EXECUTIVE_CAPITAL_DETAILS.map(({ name, id, showProgress }) => {
        const Component = COMPONENT_TYPE_MAPPER[id];
        return (
          <ExecutiveViewDetailItem label={name} key={id}>
            {Component && (
              <Component
                executiveCapitalDetails={detailsStats[id] as any}
                showProgress={showProgress}
              />
            )}
          </ExecutiveViewDetailItem>
        );
      })}
    </div>
  );
};
