import "@components/executive-view/content/index.scss";
import { OverallStatsLists } from "@components/executive-view/content/overall-stats";
import { ExecutiveViewList } from "@components/executive-view/content/lists";
import type { ExecutiveCapitalDetails } from "../types";
import type { FC } from "react";

interface ExecutiveViewProps {
  executiveCapitalDetails: ExecutiveCapitalDetails;
}

export const ExecutiveView: FC<ExecutiveViewProps> = ({
  executiveCapitalDetails,
}) => {
  const { overallStats, executiveCapitals } = executiveCapitalDetails;
  return (
    <div className="executive-stats">
      <OverallStatsLists overallStats={overallStats} />
      <ExecutiveViewList executiveCapitals={executiveCapitals} />
    </div>
  );
};
