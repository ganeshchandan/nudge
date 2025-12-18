import { createSlice } from "@reduxjs/toolkit";

export interface AppConfigState {
  selectedOption: string;
}

const initialState: AppConfigState = { selectedOption: "stats" };

export const applicationConfig = createSlice({
  name: "applicationConfig",
  initialState,
  reducers: {
    updateSelectedOption: (state, { payload }) => {
      state.selectedOption = payload;
    },
  },
});

export const { updateSelectedOption } = applicationConfig.actions;

export const AppConfigReducer = applicationConfig.reducer;
