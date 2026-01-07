import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  AppConfigReducer,
  StatsDashboardReducer,
  LeadsDashboardReducer,
  LineDashboardReducer,
  AiChatReducers,
} from "@stores/reducers";

const reducer = combineReducers({
  applicationConfig: AppConfigReducer,
  statsDashboard: StatsDashboardReducer,
  leadsDashboard: LeadsDashboardReducer,
  lineDashboard: LineDashboardReducer,
  aiChat: AiChatReducers,
});

export type RootState = ReturnType<typeof reducer>;

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer,
    preloadedState,
  });

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
