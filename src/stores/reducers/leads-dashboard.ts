import type { Leadss, LeadsOverallStats } from "@components/leads/types";
import { createSlice } from "@reduxjs/toolkit";

export interface LeadsDashboardState {
  executiveCapitalDetails: {
    executiveCapitals: Leadss;
    overallStats: LeadsOverallStats;
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
        image: "userIcon2",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 2,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
      {
        id: 125,
        image: "userIcon3",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 3,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
      {
        id: 126,
        image: "userIcon2",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 2,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
        },
      },
      {
        id: 127,
        image: "userIcon3",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 3,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
      {
        id: 128,
        image: "userIcon2",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 2,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
        },
      },
      {
        id: 129,
        image: "userIcon3",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          personaQuadrant: [{ name: "Change Agent" }],
          behaviouralTrait: [
            { name: "Risk Appetite" },
            { name: "Openness to Innovation" },
          ],
          influenceMapping: 3,
          networkIntelligence: 2,
          conferenceIntelligence: [
            {
              name: "Panelist",
              progress: "up",
            },
          ],
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
