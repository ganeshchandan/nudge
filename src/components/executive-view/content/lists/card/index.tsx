import type { ExecutiveStats } from "@components/executive-view/types";
import type { FC } from "react";
import { OverallDetails } from "@components/executive-view/content/lists/overall-details";
import { ExecutiveViewCardDetails } from "@components/executive-view/content/lists/card/details";
import { ExecutiveViewCardTags } from "@components/executive-view/content/lists/card/tags";

interface ExecutiveViewListCardProps {
  executiveCapital: ExecutiveStats;
}

export const ExecutiveViewListCard: FC<ExecutiveViewListCardProps> = ({
  executiveCapital,
}) => {
  const {
    image,
    name,
    teamName,
    detailsStats,
    tags = [],
    id,
  } = executiveCapital;

  return (
    <div className="executive-list-card">
      <OverallDetails image={image} name={name} teamName={teamName} id={id} />
      <ExecutiveViewCardDetails detailsStats={detailsStats} />
      {tags.length > 0 && <ExecutiveViewCardTags tags={tags} />}
    </div>
  );
};
