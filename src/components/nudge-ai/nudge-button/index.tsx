import { NudgeChatIcon } from "@assets/images";
import "./index.scss";
import { useChatAi } from "../hooks";
import type { RootState } from "@stores";
import { useSelector } from "react-redux";

export const NudgeChatButton = () => {
  const { showHideChatAI } = useChatAi();
  const showChatAI = useSelector(
    (state: RootState) => state.applicationConfig.showChatAI
  );

  const onClick = () => showHideChatAI(true);

  return (
    <div
      className={`nudge-chat ${showChatAI ? "hide-button" : ""}`}
      onClick={onClick}
    >
      <NudgeChatIcon className="nudge-chat-icon" />
    </div>
  );
};
