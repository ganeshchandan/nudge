export interface StatsDashboardTab {
  displayName: string;
  id: string;
}

export interface StatsDashboardOverview {
  type: string;
  value: string;
  label: string;
  progress?: {
    value: string;
    type: "up" | "down";
    status: "danger" | "onTrack" | "warning";
  };
}

export interface SummaryStatsList {
  name: string;
  value: string;
}

export interface TopPerformerDetail {
  name: string;
  awardName: string;
  personImage: string;
}
