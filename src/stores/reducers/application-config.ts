import { createSlice } from "@reduxjs/toolkit";

export interface AppConfigState {
  selectedOption: string;
  user: {
    isAuthenticated: boolean;
  };
}

const initialState: AppConfigState = {
  selectedOption: "stats",
  user: { isAuthenticated: false },
};

export const applicationConfig = createSlice({
  name: "applicationConfig",
  initialState,
  reducers: {
    updateSelectedOption: (state, { payload }) => {
      state.selectedOption = payload;
    },
    setUserAuthenticated: (state, { payload }) => {
      state.user.isAuthenticated = payload;
    },
  },
});

export const { updateSelectedOption, setUserAuthenticated } =
  applicationConfig.actions;

export const AppConfigReducer = applicationConfig.reducer;
