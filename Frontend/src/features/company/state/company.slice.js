import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCompany: null,
  companyUsers: [],
  companyAgents: [],
  companyTickets: [],
  companyMessages: [],
  workspaces: [],
  activeWorkspaceId: null,
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCurrentCompany: (state, action) => {
      state.currentCompany = action.payload;
    },
    setCompanyUsers: (state, action) => {
      state.companyUsers = action.payload;
    },
    setCompanyAgents: (state, action) => {
      state.companyAgents = action.payload;
    },
    setCompanyTickets: (state, action) => {
      state.companyTickets = action.payload;
    },
    setCompanyMessages: (state, action) => {
      state.companyMessages = action.payload;
    },
    setWorkspaces: (state, action) => {
      state.workspaces = action.payload;
    },
    addWorkspace: (state, action) => {
      state.workspaces.push(action.payload);
    },
    setActiveWorkspaceId: (state, action) => {
      state.activeWorkspaceId = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCurrentCompany,
  setCompanyUsers,
  setCompanyAgents,
  setCompanyTickets,
  setCompanyMessages,
  setWorkspaces,
  addWorkspace,
  setActiveWorkspaceId,
  setLoading,
  setError,
} = companySlice.actions;

export default companySlice.reducer;
