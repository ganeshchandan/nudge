import type { FC } from "react";
import "@components/nudge-ai/index.scss";
import { NudgeAIHeader } from "@components/nudge-ai/header";
import { NudgeAIContent } from "@components/nudge-ai/content";
import { NudgeAIFooter } from "@components/nudge-ai/footer";

interface NudgeAI {}

export const NudgeAI: FC<NudgeAI> = () => {
  return (
    <div className="nudge-ai">
      <div className="nudge-ai-container">
        <NudgeAIHeader />
        <NudgeAIContent />
        <NudgeAIFooter />
      </div>
    </div>
  );
};
