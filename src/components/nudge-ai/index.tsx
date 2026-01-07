import type { FC } from "react";
import "@components/nudge-ai/index.scss";
import { NudgeAIHeader } from "@components/nudge-ai/header";
import { NudgeAIContent } from "@components/nudge-ai/content";
import { NudgeAIFooter } from "@components/nudge-ai/footer";
import { NudgeChatButton } from "./nudge-button";

interface NudgeAI {}

export const NudgeAI: FC<NudgeAI> = () => {
  return (
    <>
      <NudgeChatButton />
      <div className="nudge-ai">
        <div className="nudge-ai-container">
          <NudgeAIHeader />
          <NudgeAIContent />
          <NudgeAIFooter />
        </div>
      </div>
    </>
  );
};
