import "@components/stats-dashboard/overview-followup/index.scss";
import { StatsDashboardOverviewItem } from "@components/stats-dashboard/overview-followup/overview/item";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const StatsDashboardOverview = () => {
  const statsDashboardOverviews = useSelector(
    (state: RootState) => state.statsDashbaord.statsDashboardOverviews
  );
  return (
    <div className="stats-dashboard-overview">
      {statsDashboardOverviews.map((statsDashboardOverview) => {
        const { type } = statsDashboardOverview;
        return (
          <StatsDashboardOverviewItem
            statsDashboardOverview={statsDashboardOverview}
            key={type}
          />
        );
      })}
    </div>
  );
};
