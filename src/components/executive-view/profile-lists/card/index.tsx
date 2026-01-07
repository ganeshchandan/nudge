import type { ExecutiveStats } from "@components/executive-view/types";
import type { FC } from "react";
import { ExecutiveViewCardHeader } from "@components/executive-view/profile-lists/card/header";
import { ExecutiveViewCardDetails } from "@components/executive-view/profile-lists/card/details";
import { ExecutiveViewCardTags } from "@components/executive-view/profile-lists/card/tags";

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
      <ExecutiveViewCardHeader
        image={image}
        name={name}
        teamName={teamName}
        id={id}
      />
      <ExecutiveViewCardDetails detailsStats={detailsStats} />
      {tags.length > 0 && <ExecutiveViewCardTags tags={tags} />}
    </div>
  );
};
