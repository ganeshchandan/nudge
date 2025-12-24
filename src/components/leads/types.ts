export interface ConferenceIntelligence {
  name: string;
  progress: "up" | "down";
}

export interface ExecutiveCapital {
  id: number;
  image: string;
  name: string;
  teamName: string;
  personaQuadrant: string;
  behaviouralTrait: string[];
  influenceMapping: number;
  networkIntelligence: number;
  conferenceIntelligence: ConferenceIntelligence;
  tags: string[];
}

export type ExecutiveCapitals = ExecutiveCapital[];

export interface ExecutiveCapitalStats {
  atRisk: string;
  topConnections: string;
  performingVerticals: string;
}
