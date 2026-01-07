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

export interface CompanyProfilePerson {
  name: string;
  image: string;
  position: string;
}
export interface CompanyProfileStats {
  hot: string;
  warm: string;
  cold: string;
}

export interface CompanyProfile {
  _id: string;
  name: string;
  image: string;
  profileStats: CompanyProfileStats;
  internalPerson: CompanyProfilePerson;
  externalPerson: CompanyProfilePerson;
}
