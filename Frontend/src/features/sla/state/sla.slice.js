import { createSlice } from "@reduxjs/toolkit";

const defaultHours = { critical: 1, high: 4, medium: 8, low: 24 };

const initialState = {
  config: {
    firstResponseHours: { ...defaultHours },
    resolutionHours: { critical: 4, high: 24, medium: 48, low: 72 },
    businessHoursOnly: false,
  },
  loading: false,
  error: null,
};

const slaSlice = createSlice({
  name: "sla",
  initialState,
  reducers: {
    setSLAConfig: (state, action) => {
      state.config = { ...state.config, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSLAConfig, setLoading, setError } = slaSlice.actions;
export default slaSlice.reducer;
