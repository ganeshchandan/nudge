import { type FC, useEffect, useRef } from "react";
import { SUGGESTIONS } from "@components/nudge-ai/constants";
import { OverflowContainer } from "@components/common";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

interface NudgeAIContentProps {}

export const NudgeAIContent: FC<NudgeAIContentProps> = () => {
  const { messages } = useSelector((state: RootState) => state.aiChat);

  // Ref for the last message element
  const bottomRef = useRef<HTMLLIElement | null>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <OverflowContainer>
      <div className="nudge-ai-content">
        <p className="suggestions">Suggestions to get started</p>
        <ul className="list">
          {SUGGESTIONS.map((suggestion) => (
            <li key={suggestion.id}>{suggestion.text}</li>
          ))}
          {messages.map(({ type, message }, idx) => (
            <li
              key={idx}
              className={`${type}-message`}
              ref={idx === messages.length - 1 ? bottomRef : null} // attach ref to last message
            >
              {message}
            </li>
          ))}
        </ul>
      </div>
    </OverflowContainer>
  );
};
