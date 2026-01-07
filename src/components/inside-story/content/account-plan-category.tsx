import { type FC, useEffect, useRef, useState } from "react";

interface CategoryItem {
  name: string;
  id: string;
}

const categories: CategoryItem[] = [
  { name: "Score Card", id: "scoreCard" },
  { name: "1 Minute Summary", id: "oneMinuteSummary" },
  { name: "Inside Story", id: "insideStory" },
  { name: "Key Stakeholders", id: "keyStakeholders" },
  { name: "Focus Area", id: "focusArea" },
  { name: "What Changed", id: "whatChanged" },
  { name: "Engagement Journey", id: "engagementJourney" },
  { name: "SWOT Analysis", id: "swotAnalysis" },
  { name: "Potential Opportunities", id: "potentialOpportunities" },
  { name: "Engagement Roadmap", id: "engagementRoadmap" },
];

interface AccountPlanCategoryProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const AccountPlanCategory: FC<AccountPlanCategoryProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [indicatorTop, setIndicatorTop] = useState<number>(0);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const selectedEl = itemRefs.current[selectedCategory];
    if (selectedEl) {
      const top = selectedEl.offsetTop + selectedEl.offsetHeight / 2 - 8;
      setIndicatorTop(top);
    }
  }, [selectedCategory]);

  return (
    <div className="account-plan-category">
      <div className="selected-indicator-container">
        <div className="selected-indicator" style={{ top: indicatorTop }} />
      </div>
      <div className="account-plan-category-header">Account Plan Category</div>
      <div className="account-plan-category-list">
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => {
              itemRefs.current[category.id] = el;
            }}
            className={`category-item ${category.id === selectedCategory ? "active" : ""}`}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
      <a href="#" className="download-dossier-button">
        DOWNLOAD DOSSIER
      </a>
    </div>
  );
};

