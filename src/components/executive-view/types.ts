import type { FC } from "react";

export interface ExecutiveStatDetail {
  name: string;
  progress?: "up" | "down";
}

export interface ExecutiveStatsDetail {
  personaQuadrant?: ExecutiveStatDetail[];
  behaviouralTrait?: ExecutiveStatDetail[];
  influenceMapping?: number;
  networkIntelligence?: number;
  conferenceIntelligence?: ExecutiveStatDetail[];
  strategicPosture?: ExecutiveStatDetail[];
  investmentDirection?: ExecutiveStatDetail[];
  pressureVectors?: ExecutiveStatDetail[];
  accountRelationship?: number;
}

export interface ExecutiveStats {
  id: number;
  image: string;
  name: string;
  teamName: string;
  detailsStats: ExecutiveStatsDetail;
  tags?: string[];
}

export type ExecutiveStatsList = ExecutiveStats[];

export interface ExecutiveCapitalDetails {
  executiveCapitals: ExecutiveStatsList;
  overallStats: ExecutiveOverallStats;
}

export interface ExecutiveOverallStats {
  atRisk?: string;
  topConnections?: string;
  performingVerticals?: string;
  uniqueOffering?: string;
  dipsFlagged?: string;
  competitorEntry?: string;
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

export type OnExecutiveSelect = (executiveId: number) => void;

export type OverallStatsField = { name: string; id: string };

export interface ExecutiveViewUIFields {
  overallStatsFields: OverallStatsField[];
  viewDetailsButtonLabel: string;
  cardCapitalDetails: ExecutiveCardCapitalDetail[];
}

export interface ExecutiveCardCapitalDetail {
  name: string;
  id: keyof ExecutiveStatsDetail;
  showProgress?: boolean;
  Component: FC<any>;
}
