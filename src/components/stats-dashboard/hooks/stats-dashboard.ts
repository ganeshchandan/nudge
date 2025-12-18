import { updateSelectedStatsTab } from "@stores/reducers";
import { useDispatch } from "react-redux";

export const useStatsDashbaord = () => {
  const dispatch = useDispatch();

  const hanldeStatsTabSelect = (selectedStatsTab: string) =>
    dispatch(updateSelectedStatsTab(selectedStatsTab));

  return { hanldeStatsTabSelect };
};
