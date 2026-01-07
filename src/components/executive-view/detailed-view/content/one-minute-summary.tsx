import type { DetailedViewStats } from "@components/executive-view/types";
import { type FC, useMemo } from "react";
import { OneMinuteSummary as OneMinuteSummaryComponent } from "@components/common/one-minute-summary";
import type { SummaryPoint } from "@components/common/one-minute-summary/types";

interface OneMinuteSummaryProps {
  detailedViewStats: DetailedViewStats;
}

export const OneMinuteSummary: FC<OneMinuteSummaryProps> = ({
  detailedViewStats,
}) => {
  const { oneMinuteSummary } = detailedViewStats;
  
  // Transform the data format to match the new component's expected format
  const summaryPoints: SummaryPoint[] = useMemo(() => {
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
  }, [oneMinuteSummary]);

  // Always render the component wrapper to maintain layout
  // The component itself will handle empty state
  return (
    <div style={{ marginBottom: "1rem" }}>
      <OneMinuteSummaryComponent
        title="1 Minute Summary"
        points={summaryPoints}
      />
    </div>
  );
};
