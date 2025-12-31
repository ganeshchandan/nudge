import "@components/nudge-ai/index.scss";
import type { FC } from "react";
import { SUGGESTIONS, HELPERS } from "@components/nudge-ai/constants";


interface NudgeAI {
}

export const NudgeAI: FC<NudgeAI> = ({
}) => {
  return (
    <div className="nudge-ai">
        <div className="nudge-ai-container">
          <div className="nudge-ai-header">
            Nudge AI
          </div>
          <div className="nudge-ai-content">
            <p className="suggestions">Suggestions to get started</p>
            <ul className="list">
              {SUGGESTIONS.map((suggestion) => (
                <li key={suggestion.id}>{suggestion.text}</li>
              ))}
              <li className="user-message">Show me events, conferences, alumni @anthony has been part of along with @murdo. Also show their common areas of interest.</li>
              <li className="agent-message">
                <p>Here are the list that may help you plan your task creation.</p>
                <ul className="events">
                  <li>CES 2024 (Jan 9-12, Las Vegas) focused on health tech innovations.</li>
                  <li>J.P. Morgan Healthcare Conference (Jan 8-11, San Francisco) gathered industry leaders.</li>
                  <li>HIMSS Global Health Conference (March 11-15, Orlando) highlighted healthcare IT trends.</li>
                </ul>
              </li>
            </ul>
            {HELPERS.map((helper) => (
                <p className="helper-cta" key={helper.id}>{helper.text}</p>
              ))}
          </div>
          <div className="nudge-ai-footer">
            <textarea className="input-box" placeholder="Ask about executive. Type @ for mentions" />
            {/* <button className="send-button">icon</button> */}
          </div>
        </div>
    </div>
  );
};
