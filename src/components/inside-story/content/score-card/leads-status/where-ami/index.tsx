import { NudgeTag } from "@components/common";
import { LeadStatusLists } from "../lead-status-lists";
import "./index.scss";

export const WhereAmI = () => {
  return (
    <div className="where-am-i">
      <LeadStatusLists />
      <NudgeTag tagName="Nudge Insights" />
      <ul className="where-am-i-info">
        <li>
          <strong>Positive momentum:</strong> 6 leads transitioned from Cold →
          Warm following targeted outreach on Regulatory Al and Medical Writing
          automation.
        </li>
        <li>
          <strong>Warm to Hot conversion driver: </strong> Engagements involving
          Regulatory Operations and Medical Affairs stakeholders.
        </li>
        <li>
          <strong>Risk signal:</strong> 6 Cold leads remain unresponsive after
          repeated omnichannel outreach attempts.
        </li>
        <li>
          <strong>Sales Cue:</strong> Regulatory and Medical stakeholders show
          improving engagement velocity; Cold leads require message refresh or
          deprioritization.
        </li>
      </ul>
    </div>
  );
};
