import { useContext, type FC } from "react";
import { ExecutiveViewDetailItem } from "@components/executive-view/profile-lists/card/details/item";
import type { ExecutiveStatsDetail } from "@components/executive-view/types";
import { ExecutiveContext } from "@components/executive-view/context/setup";

export interface ExecutiveViewCardDetailsProps {
  detailsStats: ExecutiveStatsDetail;
}

export const ExecutiveViewCardDetails: FC<ExecutiveViewCardDetailsProps> = ({
  detailsStats,
}) => {
  const { executiveViewUIFields } = useContext(ExecutiveContext);
  const { cardCapitalDetails } = executiveViewUIFields;
  return (
    <div
      className="executive-card-details"
      style={{
        gridTemplateColumns: `repeat(${cardCapitalDetails.length}, 1fr)`,
      }}
    >
      {cardCapitalDetails.map(({ name, id, showProgress, Component }) => {
        return (
          <ExecutiveViewDetailItem label={name} key={id}>
            {Component && (
              <Component
                executiveCapitalDetails={detailsStats[id] as any}
                showProgress={showProgress}
                label={name}
              />
            )}
          </ExecutiveViewDetailItem>
        );
      })}
    </div>
  );
};

export { ExecutiveViewDetailList } from "./list-component";
export { ExecutiveViewDetailRatings } from "./ratings";
