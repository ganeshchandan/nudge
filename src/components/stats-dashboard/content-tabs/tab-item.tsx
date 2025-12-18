import type { StatsDashboardTab } from "@components/stats-dashboard/types";
import type { FC } from "react";
import { useStatsDashbaord } from "@components/stats-dashboard/hooks/stats-dashboard";

interface StatsContentTabItemProps {
  statsDashboardTab: StatsDashboardTab;
  isSelected: boolean;
}
export const StatsContentTabItem: FC<StatsContentTabItemProps> = ({
  statsDashboardTab,
  isSelected,
}) => {
  const { hanldeStatsTabSelect } = useStatsDashbaord();
  const { displayName, id } = statsDashboardTab;

  const onTabClick = () => {
    hanldeStatsTabSelect(id);
  };

  return (
    <div
      className={`stats-content-tab ${
        isSelected ? "stats-content-tab-selected" : ""
      }`}
      onClick={onTabClick}
    >
      {displayName}
    </div>
  );
};
