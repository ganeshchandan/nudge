import "@components/engagement-plan/details/index.scss";
import { DailyCatchup } from "@components/engagement-plan/details/daily-catch-up";

export const EngagementDetails = () => {
  return (
    <div className="engagement-plan-details">
      <DailyCatchup />
    </div>
  );
};
