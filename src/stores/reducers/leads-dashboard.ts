import type {
  ExecutiveCapitals,
  ExecutiveCapitalStats,
} from "@components/leads/types";
import { createSlice } from "@reduxjs/toolkit";

export interface LeadsDashboardState {
  executiveCapitalDetails: {
    executiveCapitals: ExecutiveCapitals;
    overallStats: ExecutiveCapitalStats;
  };
}

const initialState: LeadsDashboardState = {
  executiveCapitalDetails: {
    overallStats: {
      atRisk: "04",
      topConnections: "08",
      performingVerticals: "03",
    },
    executiveCapitals: [
      {
        id: 124,
        image: "person_1",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        personaQuadrant: "Change Agent",
        behaviouralTrait: ["Risk Appetite", "Openness to Innovation"],
        influenceMapping: 3,
        networkIntelligence: 2,
        conferenceIntelligence: {
          name: "Panelist",
          progress: "up",
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
      {
        id: 125,
        image: "person_1",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        personaQuadrant: "Change Agent",
        behaviouralTrait: ["Risk Appetite", "Openness to Innovation"],
        influenceMapping: 3,
        networkIntelligence: 2,
        conferenceIntelligence: {
          name: "Panelist",
          progress: "up",
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
    ],
  },
};

export const leadDashboardConfig = createSlice({
  name: "leadsDashboardConfig",
  initialState,
  reducers: {},
});

export const LeadsDashboardReducer = leadDashboardConfig.reducer;
