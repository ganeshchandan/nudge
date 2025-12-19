import { WIDGET_ICON_STYLES } from "@components/stats-dashboard/summary-nudge/summary/widgets/stats-widget/constants";
import type { FC } from "react";

interface SummaryStatsWidgetHeaderPorps {
  widgetKey: string;
  value: string;
}

export const SummaryStatsWidgetHeader: FC<SummaryStatsWidgetHeaderPorps> = ({
  widgetKey,
  value,
}) => {
  const { WidgetIcon, label } = WIDGET_ICON_STYLES[widgetKey];
  return (
    <div className="summary-widget-header">
      <WidgetIcon className="summary-widget-icon" />
      <div className="summary-stats">
        <div className="summary-stats-value">{value}</div>
        <div className="summary-stats-name">{label}</div>
      </div>
    </div>
  );
};
