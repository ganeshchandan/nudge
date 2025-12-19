import {
  AccountLevelScoreIcon,
  ExecutiveMetricsIcon,
  ProgramLevelScoreIcon,
} from "@assets/images";
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
    className: "executive-metrics-widget",
    label: "Executive Metrics",
  },
  accountLevelScore: {
    WidgetIcon: AccountLevelScoreIcon,
    className: "account-level-score",
    label: "Account-Level Score",
  },
  programLevelScore: {
    WidgetIcon: ProgramLevelScoreIcon,
    className: "program-level-score",
    label: "Program-Level Score",
  },
};
