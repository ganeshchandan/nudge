import { NudgeTabs, type NudgeTabItem } from "@components/common";
import type { FC } from "react";

interface LeadsStatusCardProps {
  tabItems: NudgeTabItem[];
  contents: Record<
    string,
    {
      Component: FC<any>;
      props?: Record<string, any>;
    }
  >;
  selectedTab: string;
}

export const LeadsStatusCard: FC<LeadsStatusCardProps> = ({
  tabItems,
  contents,
  selectedTab,
}) => {
  return (
    <div className="leads-status-card">
      <NudgeTabs
        tabItems={tabItems}
        selectedTab={selectedTab}
        className="leads-status-card-tabs"
        contents={contents}
      />
    </div>
  );
};
