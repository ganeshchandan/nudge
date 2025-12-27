import { useContext } from "react";
import { ExecutiveContext } from "../context/setup";

export const useExecutiveAction = () => {
  const { onExecutiveSelect } = useContext(ExecutiveContext);

  const onExecutiveIdSelect = (id: number) => onExecutiveSelect(id);

  return { onExecutiveIdSelect };
};
