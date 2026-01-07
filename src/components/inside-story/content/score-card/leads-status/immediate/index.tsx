import { NudgeTag } from "@components/common";
import "./index.scss";

export const Immediate = () => {
  return (
    <div className="immediate-tab">
      <div className="immediate-header">
        Initiate a Regulatory + Medical joint discovery discussion
      </div>
      <div className="information-block">
        <label className="information-block-header">Why:</label>
        <ul className="information-block-info-lists">
          <li>
            Meeting notes indicate parallel interest in document automation and
            regulatory intelligence.
          </li>
          <li>
            Similar dual-function conversations historically increase
            opportunity conversion probability.
          </li>
        </ul>
      </div>
      <div className="information-block">
        <label className="information-block-header">Suggested Personas:</label>
        <ul className="information-block-inof-lists">
          <li>Head of Regulatory Operations</li>
          <li>Head of Regulatory Operations</li>
          <li>Regulatory IT / Digital Owner</li>
        </ul>
      </div>
      <NudgeTag tagName="Nudge Insights" />
      <div className="analyzed-sources-link">VIEW ANALYZED SOURCES</div>
    </div>
  );
};
