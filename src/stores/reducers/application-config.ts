import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    updateSelectedOption: (state, action: PayloadAction<string>) => {
      state.selectedOption = action.payload;
    },
    setUserAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.user.isAuthenticated = action.payload;
    },
  },
});

export const { updateSelectedOption, setUserAuthenticated } =
  applicationConfig.actions;

export const AppConfigReducer = applicationConfig.reducer;
