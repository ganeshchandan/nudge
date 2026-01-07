import type { DetailedViewStats } from "@components/executive-view/types";
import { type FC, useMemo } from "react";
import { OneMinuteSummary as OneMinuteSummaryComponent } from "@components/common/one-minute-summary";
import type { SummaryPoint } from "@components/common/one-minute-summary/types";

interface ProfileCategoryItem {
  field_name: string;
  field_value: string | string[] | any;
}

interface OneMinuteSummaryProps {
  detailedViewStats: DetailedViewStats;
  selectedQuickLinkId?: string;
  otherFields?: ProfileCategoryItem[];
}

export const OneMinuteSummary: FC<OneMinuteSummaryProps> = ({
  detailedViewStats,
  selectedQuickLinkId,
  otherFields = [],
}) => {
  const { oneMinuteSummary } = detailedViewStats;
  
  // Only show this component for "one_minute_summary" field
  const shouldShow = useMemo(() => {
    // If a QuickLink is selected, only show if it's "one_minute_summary"
    if (selectedQuickLinkId) {
      return selectedQuickLinkId === "one_minute_summary";
    }
    // Default: show if we have oneMinuteSummary data
    return oneMinuteSummary && Array.isArray(oneMinuteSummary) && oneMinuteSummary.length > 0;
  }, [selectedQuickLinkId, oneMinuteSummary]);

  // Transform the data format - only for one_minute_summary
  const summaryPoints: SummaryPoint[] = useMemo(() => {
    // If one_minute_summary is selected from otherFields
    if (selectedQuickLinkId === "one_minute_summary" && otherFields.length > 0) {
      const selectedField = otherFields.find(
        (field) => field.field_name === "one_minute_summary"
      );
      
      if (selectedField && Array.isArray(selectedField.field_value)) {
        return selectedField.field_value
          .filter((item) => {
            if (!item) return false;
            const content = typeof item === 'string' ? item.trim() : String(item).trim();
            return content.length > 0;
          })
          .map((item, index) => {
            const content = typeof item === 'string' ? item : String(item);
            // Try to parse "Heading: Content" format
            const colonIndex = content.indexOf(':');
            if (colonIndex > 0) {
              return {
                id: `summary-point-${index}`,
                title: content.substring(0, colonIndex).trim(),
                description: content.substring(colonIndex + 1).trim(),
              };
            }
            return {
              id: `summary-point-${index}`,
              title: "",
              description: content.trim(),
            };
          });
      }
    }
    
    // Default: use oneMinuteSummary from detailedViewStats
    if (!oneMinuteSummary || !Array.isArray(oneMinuteSummary) || oneMinuteSummary.length === 0) {
      return [];
    }
    
    return oneMinuteSummary
      .filter((item) => {
        // Filter out items that don't have content (header can be empty)
        if (!item) return false;
        const content = (item.content || "").trim();
        return content.length > 0;
      })
      .map((item, index) => ({
        id: `summary-point-${index}`,
        title: (item.header || "").trim(),
        description: (item.content || "").trim(),
      }));
  }, [oneMinuteSummary, selectedQuickLinkId, otherFields]);

  // Only render for one_minute_summary
  if (!shouldShow || summaryPoints.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <OneMinuteSummaryComponent
        title="1 Minute Summary"
        points={summaryPoints}
      />
    </div>
  );
};
