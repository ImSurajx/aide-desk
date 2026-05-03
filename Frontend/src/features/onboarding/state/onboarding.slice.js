import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  totalSteps: 4,
  data: {
    company: {},
    workspace: {},
    team: [],
    sla: {},
  },
  loading: false,
  error: null,
};

const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      if (state.step < state.totalSteps - 1) state.step += 1;
    },
    prevStep: (state) => {
      if (state.step > 0) state.step -= 1;
    },
    setStepData: (state, action) => {
      const { key, payload } = action.payload;
      state.data[key] = { ...(state.data[key] || {}), ...payload };
    },
    resetOnboarding: () => initialState,
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setStep,
  nextStep,
  prevStep,
  setStepData,
  resetOnboarding,
  setLoading,
  setError,
} = onboardingSlice.actions;
export default onboardingSlice.reducer;
