import type {
  ExecutiveViewUIFields,
  OnExecutiveSelect,
} from "@components/executive-view/types";
import type { FC, PropsWithChildren } from "react";
import { ExecutiveContext } from "@components/executive-view/context/setup";

interface ExecutiveContextProviderProps {
  onExecutiveSelect: OnExecutiveSelect;
  executiveViewUIFields: ExecutiveViewUIFields;
}

export const ExecutiveContextProvider: FC<
  PropsWithChildren<ExecutiveContextProviderProps>
> = ({ children, ...propTypes }) => {
  return (
    <ExecutiveContext.Provider value={{ ...propTypes }}>
      {children}
    </ExecutiveContext.Provider>
  );
};
