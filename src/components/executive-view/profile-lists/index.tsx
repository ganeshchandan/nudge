import type { FC } from "react";
import "@components/executive-view/profile-lists/index.scss";
import { OverallStatsLists } from "@components/executive-view/profile-lists/overall-stats";
import type { ExecutiveCapitalDetails } from "@components/executive-view/types";
import { OverflowContainer } from "@components/common";
import { ExecutiveViewListCard } from "@components/executive-view/profile-lists/card";

interface ExecutiveViewProps {
  executiveCapitalDetails: ExecutiveCapitalDetails;
}

export const ExecutiveView: FC<ExecutiveViewProps> = ({
  executiveCapitalDetails,
}) => {
  const { overallStats, executiveCapitals } = executiveCapitalDetails;
  return (
    <div className="executive-stats smooth-content-load">
      <OverallStatsLists overallStats={overallStats} />
      <OverflowContainer>
        <div className="executive-lists">
          {executiveCapitals.map((executiveCapital) => (
            <ExecutiveViewListCard
              executiveCapital={executiveCapital}
              key={executiveCapital.id}
            />
          ))}
        </div>
      </OverflowContainer>
    </div>
  );
};
