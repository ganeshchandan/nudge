import { NudgeChatHeaderIcon } from "@assets/images";

import { useChatAi } from "./hooks";

export const NudgeAIHeader = () => {
  const { showHideChatAI } = useChatAi();

  const onCloseClick = () => showHideChatAI(false);

  return (
    <div className="nudge-ai-header">
      <NudgeChatHeaderIcon
        className="nudge-ai-chat-icon"
        onClick={onCloseClick}
      />
      Nudge AI
    </div>
  );
};
