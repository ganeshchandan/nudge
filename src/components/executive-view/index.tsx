import "@components/executive-view/index.scss";
import { ExecutiveDetailedView } from "@components/executive-view/detailed-view";
import { ExecutiveView } from "@components/executive-view/content";
import type { FC } from "react";
import type {
  DetailedViewStats,
  ExecutiveCapitalDetails,
  ExecutiveViewUIFields,
  OnExecutiveSelect,
} from "@components/executive-view/types";
import { ExecutiveContextProvider } from "@components/executive-view/context";

interface ExecutiveDashboardProps {
  detailedViewStats: DetailedViewStats;
  executiveCapitalDetails: ExecutiveCapitalDetails;
  onExecutiveSelect: OnExecutiveSelect;
  selectedExecutiveID: number;
  executiveViewUIFields: ExecutiveViewUIFields;
}

export const ExecutiveDashboard: FC<ExecutiveDashboardProps> = ({
  detailedViewStats,
  executiveCapitalDetails,
  onExecutiveSelect,
  selectedExecutiveID,
  executiveViewUIFields,
}) => {
  return (
    <ExecutiveContextProvider
      onExecutiveSelect={onExecutiveSelect}
      executiveViewUIFields={executiveViewUIFields}
    >
      <div className="executive-dashboard">
        {selectedExecutiveID !== -1 ? (
          <ExecutiveDetailedView detailedViewStats={detailedViewStats} />
        ) : (
          <ExecutiveView executiveCapitalDetails={executiveCapitalDetails} />
        )}
      </div>
    </ExecutiveContextProvider>
  );
};
