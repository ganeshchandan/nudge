import { type FC } from "react";
import "@components/inside-story/content/score-card/index.scss";
import { ScoreCardOverview } from "./score-card-overview";
import { LeadsStatusCardView } from "./leads-status";

export const ScoreCard: FC = () => {
  return (
    <div className="score-card-page">
      <ScoreCardOverview />
      <LeadsStatusCardView />
    </div>
  );
};
