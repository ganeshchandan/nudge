import { OverflowContainer } from "@components/common";
import { ExecutiveViewListCard } from "@components/executive-view/content/lists/card";
import type { ExecutiveStatsList } from "@components/executive-view/types";
import type { FC } from "react";

interface ExecutiveViewListProps {
  executiveCapitals: ExecutiveStatsList;
}

export const ExecutiveViewList: FC<ExecutiveViewListProps> = ({
  executiveCapitals,
}) => {
  return (
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
  );
};
