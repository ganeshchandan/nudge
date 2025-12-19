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
      className={`stats-dashboard-option ${
        isSelected ? "stats-dashboard-option-selected" : ""
      }`}
      onClick={onTabClick}
    >
      {displayName}
    </div>
  );
};
