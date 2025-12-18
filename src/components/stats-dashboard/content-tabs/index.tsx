import { STATS_DASHBOARD_TABS } from "@components/stats-dashboard/constants";
import { StatsContentTabItem } from "./tab-item";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const StatsContentTabs = () => {
  const selectedStatsTab = useSelector(
    (state: RootState) => state.statsDashbaord.selectedStatsTab
  );
  return (
    <div className="stats-content-tabs">
      {STATS_DASHBOARD_TABS.map((statsDashboardTab) => {
        const { id } = statsDashboardTab;
        return (
          <StatsContentTabItem
            statsDashboardTab={statsDashboardTab}
            key={id}
            isSelected={selectedStatsTab === id}
          />
        );
      })}
    </div>
  );
};
