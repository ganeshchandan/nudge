import type {
  StatsDashboardOverview,
  SummaryStatsList,
} from "@components/stats-dashboard/types";
import { createSlice } from "@reduxjs/toolkit";

export interface StatsDashboardState {
  selectedStatsTab: string;
  statsDashboardOverviews: StatsDashboardOverview[];
  followUp: string;
  accountSummary: {
    executiveMetrics: {
      engageement: SummaryStatsList[];
      relationship: SummaryStatsList[];
      strategic: SummaryStatsList[];
      business: SummaryStatsList[];
    };
    accountLevelScore: SummaryStatsList[];
    programLevelScore: SummaryStatsList[];
  };
}

const initialState: StatsDashboardState = {
  selectedStatsTab: "overview",
  statsDashboardOverviews: [
    {
      type: "noofRFPs",
      value: "10",
      label: "No. of RFPs",
    },
    {
      type: "warning",
      value: "04",
      label: "Task at Risk",
    },
    {
      type: "escalations",
      value: "03",
      label: "Escalations",
    },
    {
      type: "eventClosing",
      value: "06",
      label: "Event Closing ",
    },
    {
      type: "remainder",
      value: "04",
      label: "Reminders",
    },
  ],
  followUp: "02",
  accountSummary: {
    executiveMetrics: {
      engageement: [
        {
          name: "Last-touch Recency",
          value: "8",
        },
        {
          name: "Meeting Frequency",
          value: "8.33",
        },
        {
          name: "Interaction Sentiment",
          value: "4.8",
        },
        {
          name: "Game/Non-game",
          value: "2",
        },
        {
          name: "Persona Outreach",
          value: "1.5",
        },
      ],
      relationship: [
        {
          name: "Heat Classification",
          value: "7.5",
        },
        {
          name: "Touchpoint Consistency",
          value: "4.37",
        },
        {
          name: "Influencer Activation",
          value: "2",
        },
      ],
      strategic: [
        {
          name: "Offering Alignment",
          value: "6",
        },
        {
          name: "Event Participation",
          value: "3",
        },
        {
          name: "External Signals",
          value: "3.5",
        },
      ],
      business: [
        {
          name: "Pipeline Contribution",
          value: "1.125",
        },
        {
          name: "Conversion Potential",
          value: "4.5",
        },
      ],
    },
    accountLevelScore: [
      {
        name: "Average Executive Score",
        value: "25.38",
      },
      {
        name: "Engagement Effort Score",
        value: "12.6",
      },
      {
        name: "Business Impact Score",
        value: "9.6",
      },
      {
        name: "NPS (0–10)",
        value: "7",
      },
      {
        name: "Powercentre Count",
        value: "6.67",
      },
      {
        name: "Influencer Count",
        value: "2.67",
      },
    ],
    programLevelScore: [
      {
        name: "Average Account Score",
        value: "23.52",
      },
      {
        name: "Powercentre Coverage",
        value: "5.42",
      },
      {
        name: "Influencer Coverage",
        value: "2.5",
      },
      {
        name: "Engagement Effort",
        value: "12.01",
      },
      {
        name: "Business Impact",
        value: "8.25",
      },
      {
        name: "NPS",
        value: "6.75",
      },
    ],
  },
};

export const statsDashbaordConfig = createSlice({
  name: "statsDashbaordConfig",
  initialState,
  reducers: {
    updateSelectedStatsTab: (state, { payload }) => {
      state.selectedStatsTab = payload;
    },
  },
});

export const { updateSelectedStatsTab } = statsDashbaordConfig.actions;

export const StatsDashbaordReducer = statsDashbaordConfig.reducer;
