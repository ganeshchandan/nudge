import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  AppConfigReducer,
  StatsDashboardReducer,
  LeadsDashboardReducer,
  LineDashboardReducer,
} from "@stores/reducers";

export type RootState = ReturnType<typeof store.getState>;

const reducer = combineReducers({
  applicationConfig: AppConfigReducer,
  statsDashboard: StatsDashboardReducer,
  leadsDashboard: LeadsDashboardReducer,
  lineDashboard: LineDashboardReducer,
});

export const setupStore = (preloadedState: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
  });

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
