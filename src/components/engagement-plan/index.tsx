import { DetailedViewBackButton } from "@components/common";
import "@components/engagement-plan/index.scss";
import { EngagementPlanHeader } from "@components/engagement-plan/header";
import { EngagementPlanContent } from "@components/engagement-plan/content";

export const EngagementPlan = () => {
  return (
    <div className="engagement-plan-dashboard smooth-content-load">
      <DetailedViewBackButton />
      <div className="engagement-plan">
        <EngagementPlanHeader />
        <EngagementPlanContent />
      </div>
    </div>
  );
};
