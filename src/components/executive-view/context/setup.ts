import { createContext } from "react";
import type {
  OnExecutiveSelect,
  ExecutiveViewUIFields,
} from "@components/executive-view/types";

export type TypeOfView = "leads" | "lines";

export interface ExecutiveContextProp {
  onExecutiveSelect: OnExecutiveSelect;
  executiveViewUIFields: ExecutiveViewUIFields;
  typeOfView: TypeOfView;
}

export const ExecutiveContext = createContext<ExecutiveContextProp>({
  onExecutiveSelect: () => "",
  executiveViewUIFields: {
    overallStatsFields: [],
    viewDetailsButtonLabel: "",
    cardCapitalDetails: [],
    engagementFields: [],
    quickLinks: {
      headerName: "",
      links: [],
    },
  },
  typeOfView: "leads",
});
