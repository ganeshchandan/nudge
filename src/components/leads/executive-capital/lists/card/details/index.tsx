import type { FC } from "react";
import { COMPONENT_TYPE_MAPPER, ExecutiveCapitalDetailItem } from "./item";
import { EXECUTIVE_CAPITAL_DETAILS } from "./constants";
import type { ExecutiveCapitalDetailsStats } from "@components/leads/types";

export interface ExecutiveCapitalDetailsProps {
  detailsStats: ExecutiveCapitalDetailsStats;
}

export const ExecutiveCapitalDetails: FC<ExecutiveCapitalDetailsProps> = ({
  detailsStats,
}) => {
  return (
    <div className="executive-capital-details">
      {EXECUTIVE_CAPITAL_DETAILS.map(({ name, id, showProgress }) => {
        const Component = COMPONENT_TYPE_MAPPER[id];
        return (
          <ExecutiveCapitalDetailItem label={name} key={id}>
            {Component && (
              <Component
                executiveCapitalDetails={detailsStats[id] as any}
                showProgress={showProgress}
              />
            )}
          </ExecutiveCapitalDetailItem>
        );
      })}
    </div>
  );
};
