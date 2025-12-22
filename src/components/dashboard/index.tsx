import { LeftPanel } from "@components/left-panel";
import "@components/dashboard/index.scss";
import { Outlet } from "react-router-dom";

export const NudgeDashboard = () => {
  return (
    <div className="nudge-dashboard">
      <LeftPanel />
      <div className="nudge-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};
