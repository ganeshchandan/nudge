import type { StatsDashboardOverview } from "@components/stats-dashboard/types";
import { createSlice } from "@reduxjs/toolkit";

export interface StatsDashboardState {
  selectedStatsTab: string;
  statsDashboardOverviews: StatsDashboardOverview[];
  followUp: string;
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
