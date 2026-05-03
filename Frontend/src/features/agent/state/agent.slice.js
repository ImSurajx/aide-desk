import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: [],
  currentAgent: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    totalPages: 1,
    totalAgents: 0,
  },
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents: (state, action) => {
      state.agents = action.payload.agents || action.payload;
      if (action.payload.pagination) {
        state.pagination = action.payload.pagination;
      }
    },
    setCurrentAgent: (state, action) => {
      state.currentAgent = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateAgentInList: (state, action) => {
      const index = state.agents.findIndex((a) => a._id === action.payload._id);
      if (index !== -1) {
        state.agents[index] = { ...state.agents[index], ...action.payload };
      }
      if (state.currentAgent?._id === action.payload._id) {
        state.currentAgent = { ...state.currentAgent, ...action.payload };
      }
    },
    removeAgentFromList: (state, action) => {
      state.agents = state.agents.filter((a) => a._id !== action.payload);
      if (state.currentAgent?._id === action.payload) {
        state.currentAgent = null;
      }
    },
  },
});

export const {
  setAgents,
  setCurrentAgent,
  setLoading,
  setError,
  updateAgentInList,
  removeAgentFromList,
} = agentSlice.actions;

export default agentSlice.reducer;
