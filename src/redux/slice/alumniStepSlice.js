// src/redux/stepsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    currentStep: 1,
    completedSteps: [],
  },
  reducers: {
    getCurrentStep: (state) => state.currentStep,

    nextStep: (state) => {
      state.currentStep += 1;
      if (!state.completedSteps.includes(state.currentStep)) {
        state.completedSteps.push(state.currentStep);
      }
    },
    prevStep: (state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },

    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { getCurrentStep, nextStep, prevStep, setStep } =
  stepsSlice.actions;
export default stepsSlice.reducer;
