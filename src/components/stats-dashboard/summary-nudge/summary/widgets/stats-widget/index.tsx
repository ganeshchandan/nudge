import type { FC, PropsWithChildren } from "react";
import "@components/stats-dashboard/summary-nudge/summary/widgets/stats-widget/index.scss";
import { NudgeWidget } from "@components/common/widget";
import { WIDGET_ICON_STYLES } from "@components/stats-dashboard/summary-nudge/summary/widgets/stats-widget/constants";
import { SummaryStatsWidgetHeader } from "./header";

interface SummaryStatsWidgetPorps {
  widgetKey: string;
  value: string;
}

export const SummaryStatsWidget: FC<
  PropsWithChildren<SummaryStatsWidgetPorps>
> = ({ widgetKey, value, children }) => {
  const { className } = WIDGET_ICON_STYLES[widgetKey];
  return (
    <NudgeWidget className={`summary-widget ${className}`}>
      <SummaryStatsWidgetHeader widgetKey={widgetKey} value={value} />
      {children}
    </NudgeWidget>
  );
};
