import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.splice(LIVE_CHAT_COUNT, 1);
      state.chatMessages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
