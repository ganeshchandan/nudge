import { MicIcon, SpeechIcon } from "@assets/images";
import { getChatMessage } from "@services/ai-chat";
import { pushMessages } from "@stores/reducers";
import { useState, type FC, type KeyboardEvent } from "react";
import { useDispatch } from "react-redux";

interface NudgeAIFooterProps {}

export const NudgeAIFooter: FC<NudgeAIFooterProps> = () => {
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSend = () => {
    if (!message.trim()) return;

    dispatch(pushMessages({ type: "user", message: message }));
    setMessage("");
    getChatMessage(message);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent new line
      handleSend();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="nudge-ai-footer">
      <div className="nudge-ai-messenger">
        <textarea
          className="nudge-ai-messenger-textarea"
          placeholder="Ask about executive. Type @ for mentions"
          onKeyDown={onKeyDown}
          value={message}
          onChange={onChange}
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
