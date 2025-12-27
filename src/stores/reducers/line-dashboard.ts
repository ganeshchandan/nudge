import type {
  DetailedViewStats,
  ExecutiveCapitalDetails,
} from "@components/executive-view/types";
import { createSlice } from "@reduxjs/toolkit";

export interface LineDashboardState {
  executiveCapitalDetails: ExecutiveCapitalDetails;
  detailedViewStats: DetailedViewStats;
  selectedExecutiveID: number;
}

const initialState: LineDashboardState = {
  selectedExecutiveID: -1,
  executiveCapitalDetails: {
    executiveCapitals: [
      {
        id: 124,
        image: "userIcon2",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
            },
          ],
        },
        tags: ["Growth Focused", "Transformation Mode", "Expansion Strategy"],
      },
      {
        id: 125,
        image: "userIcon3",
        name: "Murdo Gordon",
        teamName: "EVP Global Commercial Ops | Amgen",
        detailsStats: {
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
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
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
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
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
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
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
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
          strategicPosture: [
            { name: "Transformation-Led" },
            { name: "R&D-Centric" },
          ],
          investmentDirection: [
            { name: "AI Investments" },
            { name: "Emerging Market Expansion" },
          ],
          accountRelationship: 2,
          pressureVectors: [
            {
              name: "Supply Chain Volatility",
            },
            {
              name: "Macroeconomic Uncertainty",
            },
          ],
        },
        tags: ["Nudge Recommended", "Influencer"],
      },
    ],
    overallStats: {
      dipsFlagged: "02",
      competitorEntry: "01",
      uniqueOffering: "02",
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
          "Driven by numbers and quantifiable actions- Looks for “Financial Sense”",
      },
      {
        header: "",
        content:
          "Quick Turnarounds / Bold Decisions (he is known for his bold pricing strategies)",
      },
      {
        header: "",
        content:
          "Believes in scale - APAC focused for growthon his mind & seems his personal agenda",
      },
      {
        header: "",
        content: "Favouritism with empowerment of close trusted team",
      },
      {
        header: "",
        content:
          "Measured & Purposeful Talking ? Too much jargons , fluff may put him off Keen observer",
      },
    ],
  },
};

export const lineDashboardConfig = createSlice({
  name: "lineDashboardConfig",
  initialState,
  reducers: {
    setLineSelectedExecutiveID: (state, { payload }) => {
      state.selectedExecutiveID = payload;
      if (payload !== -1) {
        const {
          name = "",
          teamName = "",
          image = "",
        } = state.executiveCapitalDetails.executiveCapitals.find(
          ({ id }) => id === payload
        ) || {};
        state.detailedViewStats = {
          ...state.detailedViewStats,
          name,
          id: payload,
          teamName,
          image,
        };
      }
    },
  },
});

export const { setLineSelectedExecutiveID } = lineDashboardConfig.actions;
export const LineDashboardReducer = lineDashboardConfig.reducer;
