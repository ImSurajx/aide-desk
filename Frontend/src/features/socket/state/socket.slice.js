import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connected: false,
  reconnecting: false,
  typingByChat: {}, // { [chatId]: { userId: timestamp } }
  copilotTyping: {}, // { [chatId]: boolean }
  escalating: {}, // { [chatId]: boolean }
  ticketAssignments: [], // recent ticket:assigned events
  agentJoined: {}, // { [chatId]: agentInfo }
  error: null,
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setConnected: (state, action) => {
      state.connected = action.payload;
      if (action.payload) state.reconnecting = false;
    },
    setReconnecting: (state, action) => {
      state.reconnecting = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTyping: (state, action) => {
      const { chatId, userId, isTyping } = action.payload;
      if (!state.typingByChat[chatId]) state.typingByChat[chatId] = {};
      if (isTyping) state.typingByChat[chatId][userId] = Date.now();
      else delete state.typingByChat[chatId][userId];
    },
    setCopilotTyping: (state, action) => {
      const { chatId, isTyping } = action.payload;
      state.copilotTyping[chatId] = isTyping;
    },
    setEscalating: (state, action) => {
      const { chatId, escalating } = action.payload;
      state.escalating[chatId] = escalating;
    },
    addTicketAssignment: (state, action) => {
      state.ticketAssignments.unshift(action.payload);
      if (state.ticketAssignments.length > 20)
        state.ticketAssignments.pop();
    },
    setAgentJoined: (state, action) => {
      const { chatId, agent } = action.payload;
      state.agentJoined[chatId] = agent;
    },
    resetSocket: () => initialState,
  },
});

export const {
  setConnected,
  setReconnecting,
  setError,
  setTyping,
  setCopilotTyping,
  setEscalating,
  addTicketAssignment,
  setAgentJoined,
  resetSocket,
} = socketSlice.actions;

export default socketSlice.reducer;
