import type { FC } from "react";
import { SUGGESTIONS } from "@components/nudge-ai/constants";
import { OverflowContainer } from "@components/common";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

interface NudgeAIContentProps {}

export const NudgeAIContent: FC<NudgeAIContentProps> = () => {
  const { messages } = useSelector((state: RootState) => state.aiChat);
  return (
    <OverflowContainer>
      <div className="nudge-ai-content">
        <p className="suggestions">Suggestions to get started</p>
        <ul className="list">
          {SUGGESTIONS.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.text}</li>
          ))}
          {messages.map(({ type, message }) => (
            <li className={`${type}-message`}>{message}</li>
          ))}
        </ul>
        {/* {HELPERS.map((helper) => (
            <p className="helper-cta" key={helper.id}>
              {helper.text}
            </p>
          ))} */}
      </div>
    </OverflowContainer>
  );
};
