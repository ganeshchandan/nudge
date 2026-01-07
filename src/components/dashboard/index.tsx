import { LeftPanel } from "@components/left-panel";
import "@components/dashboard/index.scss";
import { Outlet } from "react-router-dom";
import { NudgeAI } from "@components/nudge-ai";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

export const NudgeDashboard = () => {
  const showChatAI = useSelector(
    (state: RootState) => state.applicationConfig.showChatAI
  );

  return (
    <div className={`nudge-dashboard ${showChatAI ? "chat-ai-opened" : ""}`}>
      <LeftPanel />
      <div className="nudge-dashboard-content">
        <Outlet />
      </div>
      <NudgeAI />
    </div>
  );
};
