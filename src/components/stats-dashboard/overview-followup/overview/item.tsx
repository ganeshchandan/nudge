import {
  EscalationsIcon,
  EventClosingIcon,
  NoofRFPsIcon,
  WarningIcon,
  RemainderIcon,
} from "@assets/images";
import "@components/stats-dashboard/overview-followup/index.scss";
import type { StatsDashboardOverview } from "@components/stats-dashboard/types";
import type { FC } from "react";

const ICON_TYPE_MAPPER: Record<string, FC<React.SVGProps<SVGSVGElement>>> = {
  noofRFPs: NoofRFPsIcon,
  warning: WarningIcon,
  escalations: EscalationsIcon,
  eventClosing: EventClosingIcon,
  remainder: RemainderIcon,
};

interface StatsDashboardOverviewItemProps {
  statsDashboardOverview: StatsDashboardOverview;
}

export const StatsDashboardOverviewItem: FC<
  StatsDashboardOverviewItemProps
> = ({ statsDashboardOverview }) => {
  const { value, label, type } = statsDashboardOverview;
  const OverviewIcon = ICON_TYPE_MAPPER[type];
  return (
    <div className="stats-dashboard-overview-item">
      <div className="overview-item-icon">
        <OverviewIcon />
      </div>
      <div className="overview-item-details">
        <div className="overview-item-value">{value}</div>
        <div className="overview-item-label">{label}</div>
      </div>
    </div>
  );
};
