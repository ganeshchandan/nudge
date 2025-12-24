import type { ExecutiveCapital } from "@components/leads/types";
import type { FC } from "react";
import { OverallDetails } from "@components/leads/executive-capital/lists/card/overall-details";
import { ExecutiveCapitalDetails } from "@components/leads/executive-capital/lists/card/details";
import { ExecutiveCapitalTags } from "@components/leads/executive-capital/lists/card/tags";

interface ExecutiveCapitalCardProps {
  executiveCapital: ExecutiveCapital;
}

export const ExecutiveCapitalCard: FC<ExecutiveCapitalCardProps> = ({
  executiveCapital,
}) => {
  const { image, name, teamName, detailsStats, tags = [] } = executiveCapital;
  return (
    <div className="executive-capital-list-card">
      <OverallDetails image={image} name={name} teamName={teamName} />
      <ExecutiveCapitalDetails detailsStats={detailsStats} />
      {tags.length > 0 && <ExecutiveCapitalTags tags={tags} />}
    </div>
  );
};
