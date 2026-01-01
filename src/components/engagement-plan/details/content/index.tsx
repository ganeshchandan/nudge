import { useMemo } from "react";
import "@components/engagement-plan/details/content/index.scss";
import { NudgeTabs } from "@components/common/tabs";
import { ManageTasks } from "@components/engagement-plan/details/content/manage-tasks";
import { MeetingNotes } from "@components/engagement-plan/details/content/meeting-notes";
import { BrandKits } from "@components/engagement-plan/details/content/brandKit";
import { Assets } from "@components/engagement-plan/details/content/assets";

export const EngagementDetailsContent = () => {
  const contents = useMemo(
    () => ({
      manageTasks: { Component: ManageTasks },
      meetingNotes: { Component: MeetingNotes },
      brandKit: { Component: BrandKits },
      assets: { Component: Assets },
    }),
    []
  );

  return (
    <div className="engagement-details-content">
      <NudgeTabs
        className="engagement-details-tabs"
        tabItems={[
          {
            name: "Manage Tasks",
            id: "manageTasks",
          },
          {
            name: "Meeting Notes",
            id: "meetingNotes",
          },
          {
            name: "Brand Kit",
            id: "brandKit",
          },
          {
            name: "Assets",
            id: "assets",
          },
        ]}
        selectedTab="manageTasks"
        contents={contents}
        isContentRequired={true}
      />
    </div>
  );
};
