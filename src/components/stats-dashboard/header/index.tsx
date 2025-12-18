import "@components/stats-dashboard/header/index.scss";
import { UserInformation } from "@components/stats-dashboard/header/user-information";
import { StatsContentTabs } from "@components/stats-dashboard/content-tabs";

export const StatsDashboardHeader = () => {
  return (
    <div className="stats-dashboard-header">
      <UserInformation />
      <StatsContentTabs />
    </div>
  );
};
