import "@components/engagement-plan/details/index.scss";
import { DailyCatchup } from "@components/engagement-plan/details/daily-catch-up";
import { EngagementDetailsContent } from "./content";

export const EngagementDetails = () => {
  return (
    <div className="engagement-plan-details">
      <DailyCatchup />
      <EngagementDetailsContent />
    </div>
  );
};
