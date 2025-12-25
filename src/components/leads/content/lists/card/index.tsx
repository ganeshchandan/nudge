import type { Leads } from "@components/leads/types";
import type { FC } from "react";
import { OverallDetails } from "@components/leads/content/lists/overall-details";
import { LeadsCardDetails } from "@components/leads/content/lists/card/details";
import { LeadsCardTags } from "@components/leads/content/lists/card/tags";

interface LeadsListCardProps {
  executiveCapital: Leads;
}

export const LeadsListCard: FC<LeadsListCardProps> = ({ executiveCapital }) => {
  const { image, name, teamName, detailsStats, tags = [] } = executiveCapital;
  return (
    <div className="leads-list-card">
      <OverallDetails image={image} name={name} teamName={teamName} />
      <LeadsCardDetails detailsStats={detailsStats} />
      {tags.length > 0 && <LeadsCardTags tags={tags} />}
    </div>
  );
};
