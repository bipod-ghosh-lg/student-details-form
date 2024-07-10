// alumniStepSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  navigationDirection: "next", // Add this state
};

const stepSlice = createSlice({
  name: "stepsSlice",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
      state.navigationDirection = "next";
    },
    prevStep: (state) => {
      state.currentStep -= 1;
      state.navigationDirection = "prev";
    },
    setStep: (state, action) => {
      if (state.currentStep < action.payload) { 
        state.navigationDirection = "next";
      } else {
        state.navigationDirection = "prev";
      }
      state.currentStep = action.payload;
    },
  },
});

export const { nextStep, prevStep, setStep } = stepSlice.actions;

export default stepSlice.reducer;
