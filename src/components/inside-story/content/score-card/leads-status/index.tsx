import type { FC } from "react";
import "./index.scss";
import { LeadsStatusCard } from "./leads-status-card";
import { WhereAmI } from "./where-ami";
import { Immediate } from "./immediate";

export const LeadsStatusCardView: FC = () => {
  return (
    <div className="leads-status">
      <h2 className="leads-status-title">Score Card Overview</h2>
      <div className="leads-status-cards">
        <LeadsStatusCard
          tabItems={[
            {
              name: "Where Am I",
              id: "whereAmI",
            },
            {
              name: "What’s Working",
              id: "whatWorking",
            },
            {
              name: "What’s not Working",
              id: "whatNotWorking",
            },
          ]}
          selectedTab="whereAmI"
          contents={{ whereAmI: { Component: WhereAmI } }}
        />
        <LeadsStatusCard
          selectedTab="immediate"
          tabItems={[
            {
              name: "Immediate",
              id: "immediate",
            },
            {
              name: "Short Term",
              id: "shortTerm",
            },
            {
              name: "Nurture",
              id: "nurture",
            },
          ]}
          contents={{ immediate: { Component: Immediate } }}
        />
      </div>
    </div>
  );
};
