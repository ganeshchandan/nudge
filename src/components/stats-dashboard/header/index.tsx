import "@components/stats-dashboard/header/index.scss";
import { UserInformation } from "@components/stats-dashboard/header/user-information";
import { StatsDashboardOptions } from "@components/stats-dashboard/options";

export const StatsDashboardHeader = () => {
  return (
    <div className="stats-dashboard-header">
      <UserInformation />
      <StatsDashboardOptions />
    </div>
  );
};
