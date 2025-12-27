import type {
  DetailedViewStats,
  Leads,
  LeadsOverallStats,
} from "@components/leads/types";
import { createSlice } from "@reduxjs/toolkit";

export interface LeadsDashboardState {
  executiveCapitalDetails: {
    executiveCapitals: Leads;
    overallStats: LeadsOverallStats;
  };
  detailedViewStats: DetailedViewStats;
  selectedID: string | null;
}

const initialState: LeadsDashboardState = {
  executiveCapitalDetails: {
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
    overallStats: {
      atRisk: "04",
      topConnections: "08",
      performingVerticals: "03",
    },
  },
  detailedViewStats: {
    id: 124,
    image: "userIcon2",
    name: "Murdo Gordon",
    teamName: "EVP Global Commercial Ops | Amgen",
    engagementScores: {
      activeEngagements: "02",
      engagementScore: "82%",
    },
    oneMinuteSummary: [
      {
        header: "",
        content:
          "Need to make an impression in 1 go we may not get many chances",
      },
      { header: "", content: "Must avoid over indexing on USA only thinking" },
      {
        header: "",
        content:
          "Summarize thoughts in first 10 min (insight → opportunity → implication for Amgen) then elaborate",
      },
      {
        header: "",
        content:
          "Driven by numbers and quantifiable actions– Looks for “Financial Sense”",
      },
      {
        header: "",
        content:
          "Quick Turnarounds / Bold Decisions (he is known for his bold pricing strategies)",
      },
      { header: "", content: "Believes in scale – APAC focused for growth on his mind & seems his personal agenda" },
      { header: "", content: "Favouritism with empowerment of close trusted team" },
      { header: "", content: "Measured & Purposeful Talking ? Too much jargons , fluff may put him off Keen observer" },
    ],
  },
  selectedID: null,
};

export const leadDashboardConfig = createSlice({
  name: "leadsDashboardConfig",
  initialState,
  reducers: {
    selectedID: (state, action) => {
      state.selectedID = action.payload;
    },
  },
});

export const { selectedID } = leadDashboardConfig.actions;
export const LeadsDashboardReducer = leadDashboardConfig.reducer;
