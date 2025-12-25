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

export interface Leads {
  id: number;
  image: string;
  name: string;
  teamName: string;
  detailsStats: LeadsDetailsStats;
  tags?: string[];
}

export type Leadss = Leads[];

export interface LeadsOverallStats {
  atRisk: string;
  topConnections: string;
  performingVerticals: string;
}
