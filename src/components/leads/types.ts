export interface LeadsDetailStat {
  name: string;
  progress?: "up" | "down";
}

export interface LeadsDetailsStats {
  personaQuadrant: LeadsDetailStat[];
  behaviouralTrait: LeadsDetailStat[];
  influenceMapping: number;
  networkIntelligence: number;
  conferenceIntelligence: LeadsDetailStat[];
}

export interface LeadStats {
  id: number;
  image: string;
  name: string;
  teamName: string;
  detailsStats: LeadsDetailsStats;
  tags?: string[];
}

export type Leads = LeadStats[];

export interface LeadsOverallStats {
  atRisk: string;
  topConnections: string;
  performingVerticals: string;
}

export interface EngagementScores {
  activeEngagements: string;
  engagementScore: string;
}

export interface OneMinuteSummary {
  header: string;
  content: string;
}

export interface DetailedViewStats {
  id: number;
  image: string;
  name: string;
  teamName: string;
  engagementScores: EngagementScores;
  oneMinuteSummary: OneMinuteSummary[];
}
