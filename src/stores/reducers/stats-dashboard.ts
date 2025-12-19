import type {
  StatsDashboardOverview,
  SummaryExecutiveMetric,
} from "@components/stats-dashboard/types";
import { createSlice } from "@reduxjs/toolkit";

export interface StatsDashboardState {
  selectedStatsTab: string;
  statsDashboardOverviews: StatsDashboardOverview[];
  followUp: string;
  accountSummary: {
    executiveMetrics: {
      engageement: SummaryExecutiveMetric[];
      relationship: SummaryExecutiveMetric[];
      strategic: SummaryExecutiveMetric[];
      business: SummaryExecutiveMetric[];
    };
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
