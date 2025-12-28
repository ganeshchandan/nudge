import { useEffect, useState, type FC } from "react";
import "@components/common/tabs/index.scss";

interface NudgeTabItem {
  name: string;
  id: string;
}

interface NudgeTabsProps {
  tabItems: NudgeTabItem[];
  selectedTab: string;
  onTabChange?: (selectedTab: string) => void;
  isContentRequired?: boolean;
}

export const NudgeTabs: FC<NudgeTabsProps> = ({
  tabItems,
  selectedTab,
  onTabChange,
  isContentRequired = true,
}) => {
  const [tabSelected, setTabSelected] = useState<string>("");

  useEffect(() => {
    if (selectedTab) {
      setTabSelected(selectedTab);
    }
  }, [selectedTab]);

  const handleTabSelected = (selectedTab: string) => {
    setTabSelected(selectedTab);
    onTabChange?.(selectedTab);
  };

  return (
    <div className="nudge-tabs-container">
      <div className="nudge-tabs">
        {tabItems.map(({ name, id }) => (
          <div
            className={`nudge-tab ${
              id === tabSelected ? "nudge-selected-tab" : ""
            }`}
            onClick={() => handleTabSelected(id)}
          >
            {name}
          </div>
        ))}
      </div>
      {isContentRequired && <div className="nudge-tab-content"></div>}
    </div>
  );
};
