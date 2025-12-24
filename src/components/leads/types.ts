export interface ExecutiveCapitalDetailStat {
  name: string;
  progress?: "up" | "down";
}

export interface ExecutiveCapitalDetailsStats {
  personaQuadrant: ExecutiveCapitalDetailStat[];
  behaviouralTrait: ExecutiveCapitalDetailStat[];
  influenceMapping: number;
  networkIntelligence: number;
  conferenceIntelligence: ExecutiveCapitalDetailStat[];
}

export interface ExecutiveCapital {
  id: number;
  image: string;
  name: string;
  teamName: string;
  detailsStats: ExecutiveCapitalDetailsStats;
  tags?: string[];
}

export type ExecutiveCapitals = ExecutiveCapital[];

export interface ExecutiveCapitalStats {
  atRisk: string;
  topConnections: string;
  performingVerticals: string;
}
