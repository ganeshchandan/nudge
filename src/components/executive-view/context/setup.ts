import { createContext } from "react";
import type {
  OnExecutiveSelect,
  ExecutiveViewUIFields,
} from "@components/executive-view/types";

export interface ExecutiveContextProp {
  onExecutiveSelect: OnExecutiveSelect;
  executiveViewUIFields: ExecutiveViewUIFields;
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
});
