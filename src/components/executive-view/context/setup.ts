import { createContext } from "react";
import type { OnExecutiveSelect } from "@components/executive-view/types";

export interface ExecutiveContextProp {
  onExecutiveSelect: OnExecutiveSelect;
}

export const ExecutiveContext = createContext<ExecutiveContextProp>({
  onExecutiveSelect: () => "",
});
