import { DETAILED_EXECUTIVE_CAPITAL_ENGAGEMENT_FIELDS } from "../constants";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";
import "@components/leads/detailed-view/stats-in-number/index.scss";

export const StatsInNumbers = () => {
  const { engagementScores } = useSelector(
    (state: RootState) => state.leadsDashboard.detailedViewStats
  );
  return (
    <div className="stats-in-numbers">
      {DETAILED_EXECUTIVE_CAPITAL_ENGAGEMENT_FIELDS.map(
        ({ name, value, isClickAble, type }) => {
          return (
            <div
              className={`stats-in-number ${
                isClickAble ? "stats-in-number-clickable" : ""
              } stats-in-number-${type}`}
            >
              <div className="stats-in-number-header">{name}</div>
              <div className="stats-in-number-value">
                {engagementScores[value] as any}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
