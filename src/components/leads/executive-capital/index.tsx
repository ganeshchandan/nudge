import "@components/leads/executive-capital/index.scss";
import { OverallStatsLists } from "@components/leads/executive-capital/overall-stats";
import { ExecutiveCapitalList } from "@components/leads/executive-capital/lists";

export const ExecutiveCapital = () => {
  return (
    <div className="executive-capital-stats">
      <OverallStatsLists />
      <ExecutiveCapitalList />
    </div>
  );
};
