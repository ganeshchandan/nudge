import { ExecutiveMetricsIcon } from "@assets/images";
import type { FC } from "react";

export const WIDGET_ICON_STYLES: Record<
  string,
  {
    WidgetIcon: FC<React.SVGProps<SVGSVGElement>>;
    className: string;
    label: string;
  }
> = {
  executiveMetrics: {
    WidgetIcon: ExecutiveMetricsIcon,
    className: "executive-metrics",
    label: "Executive Metrics",
  },
};
