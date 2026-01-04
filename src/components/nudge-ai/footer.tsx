import { MicIcon, SpeechIcon } from "@assets/images";
import type { FC } from "react";

interface NudgeAIFooterProps {}

export const NudgeAIFooter: FC<NudgeAIFooterProps> = () => {
  return (
    <div className="nudge-ai-footer">
      <div className="nudge-ai-messenger">
        <textarea
          className="nudge-ai-messenger-textarea"
          placeholder="Ask about executive. Type @ for mentions"
        />
        <div className="nudge-ai-messenger-actions">
          <div className="messenger-speech">
            <SpeechIcon className="messenger-speech-icon" />
          </div>
          <div className="messenger-mic">
            <MicIcon className="messenger-speech-icon" />
          </div>
        </div>
      </div>
      {/* <button className="send-button">icon</button> */}
    </div>
  );
};
