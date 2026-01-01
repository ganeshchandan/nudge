import { useEffect, useState, type FC } from "react";
import "@components/common/tabs/index.scss";

interface NudgeTabItem {
  name: string;
  id: string;
}

interface NudgeTabsProps {
  className?: string;
  tabItems: NudgeTabItem[];
  selectedTab: string;
  onTabChange?: (selectedTab: string) => void;
  isContentRequired?: boolean;
  contents?: Record<
    string,
    {
      Component: FC<any>;
      props?: Record<string, any>;
    }
  >;
}

export const NudgeTabs: FC<NudgeTabsProps> = ({
  className = "",
  tabItems,
  selectedTab,
  onTabChange,
  isContentRequired = true,
  contents = {},
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

  const { Component, props = {} } = contents[tabSelected] || {};

  return (
    <div className={`nudge-tabs-container ${className}`}>
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
      {isContentRequired && Component && (
        <div className="nudge-tab-content">
          <Component {...props} selectedTab={selectedTab} />
        </div>
      )}
    </div>
  );
};
