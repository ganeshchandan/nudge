import "@components/executive-view/index.scss";
import { ExecutiveDetailedView } from "@components/executive-view/detailed-view";
import { ExecutiveView } from "@components/executive-view/profile-lists";
import type { FC, PropsWithChildren } from "react";
import type {
  DetailedViewStats,
  ExecutiveCapitalDetails,
  ExecutiveViewUIFields,
  OnExecutiveSelect,
} from "@components/executive-view/types";
import { ExecutiveContextProvider } from "@components/executive-view/context";
import type { TypeOfView } from "./context/setup";

interface ExecutiveDashboardProps {
  detailedViewStats: DetailedViewStats;
  executiveCapitalDetails: ExecutiveCapitalDetails;
  onExecutiveSelect: OnExecutiveSelect;
  selectedExecutiveID: number;
  executiveViewUIFields: ExecutiveViewUIFields;
  typeOfView: TypeOfView;
}

export const ExecutiveDashboard: FC<
  PropsWithChildren<ExecutiveDashboardProps>
> = ({
  detailedViewStats,
  executiveCapitalDetails,
  onExecutiveSelect,
  selectedExecutiveID,
  executiveViewUIFields,
  typeOfView,
}) => {
  return (
    <ExecutiveContextProvider
      onExecutiveSelect={onExecutiveSelect}
      executiveViewUIFields={executiveViewUIFields}
      typeOfView={typeOfView}
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
