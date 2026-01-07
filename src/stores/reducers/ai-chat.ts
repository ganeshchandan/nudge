import { createSlice } from "@reduxjs/toolkit";

export interface AIChatState {
  messages: { type: "user" | "agent"; message: string }[];
}

const initialState: AIChatState = {
  messages: [],
};

export const aiChatConfig = createSlice({
  name: "aiChat",
  initialState,
  reducers: {
    pushMessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { pushMessages } = aiChatConfig.actions;

export const AiChatReducers = aiChatConfig.reducer;
