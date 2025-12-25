import "@components/leads/content/index.scss";
import { OverallStatsLists } from "@components/leads/content/overall-stats";
import { LeadsList } from "@components/leads/content/lists";

export const LeadsContent = () => {
  return (
    <div className="leads-stats">
      <OverallStatsLists />
      <LeadsList />
    </div>
  );
};
