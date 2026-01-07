import { StatsUpIcon } from "@assets/images";
import type { ExecutiveStatDetail } from "@components/executive-view/types";
import { useState, type FC, useRef, useEffect } from "react";

interface ExecutiveViewDetailItemProps {
  executiveCapitalDetails: ExecutiveStatDetail[];
  showProgress: boolean;
  label?: string; // Optional label for the card header
}

export const ExecutiveViewDetailList: FC<ExecutiveViewDetailItemProps> = ({
  executiveCapitalDetails,
  showProgress,
  label,
}) => {
  // Handle undefined or null values
  const details = executiveCapitalDetails || [];
  
  // Show only first 2 items, remaining count for the rest
  const displayedItems = details.slice(0, 2);
  const remainingCount = details.length - 2;
  const remainingItems = details.slice(2);
  
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target as Node) &&
        countRef.current &&
        !countRef.current.contains(event.target as Node)
      ) {
        setShowCard(false);
      }
    };

    if (showCard) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showCard]);
  
  return (
    <div className="executive-capital-detail-list-wrapper">
      <ul className="executive-capital-detail-list">
        {displayedItems.map(({ name }, index) => (
          <li key={index} className="executive-capital-detail-list-item">
            {showProgress && <StatsUpIcon className="executive-stats-up-icon" />}
            <span className="executive-capital-detail-list-item-name">{name}</span>
            {index === 1 && remainingCount > 0 && (
              <span
                ref={countRef}
                className="executive-capital-detail-list-item-count"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCard(!showCard);
                }}
              >
                +{remainingCount}
              </span>
            )}
          </li>
        ))}
      </ul>
      {showCard && remainingItems.length > 0 && (
        <div ref={cardRef} className="executive-capital-detail-list-card">
          {label && (
            <div className="executive-capital-detail-list-card-header">
              {label}
            </div>
          )}
          <ul className="executive-capital-detail-list-card-items">
            {remainingItems.map(({ name }, index) => (
              <li key={index} className="executive-capital-detail-list-card-item">
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
