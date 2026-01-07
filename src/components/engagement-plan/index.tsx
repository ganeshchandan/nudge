// import { DetailedViewBackButton } from "@components/common";
import "@components/engagement-plan/index.scss";
import { EngagementPlanHeader } from "@components/engagement-plan/header";
import { EngagementPlanContent } from "@components/engagement-plan/content";
import { InsideStory } from "@components/inside-story";
import { useState } from "react";

export const EngagementPlan = () => {
  const [manageTaskEnabled, setManageTaskEnabled] = useState(false);

  return (
    <div className="engagement-plan-dashboard smooth-content-load">
      {/* <DetailedViewBackButton /> */}
      <div className="engagement-plan">
        <EngagementPlanHeader
          manageTaskEnabled={manageTaskEnabled}
          onManageTaskToggle={setManageTaskEnabled}
        />
        {manageTaskEnabled ? <EngagementPlanContent /> : <InsideStory />}
      </div>
    </div>
  );
};
