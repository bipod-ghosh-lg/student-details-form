// src/redux/formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0,
  formData: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    phoneNo: "",
    icamID: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    highestLevel: "",
    instituteName: "",
    course: "",
    passingYear: "",
    specialization: "",
    experience: "",
    organization: "",
    role: "",
    socialLink: "",
    expectations: "",
    communications: "",
    checkbox: false,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      state.activeStep += 1;
    },
    prevStep: (state) => {
      state.activeStep -= 1;
    },
    resetForm: (state) => {
      state.activeStep = 0;
      state.formData = initialState.formData;
    },
  },
});

export const { setFormData, nextStep, prevStep, resetForm } = formSlice.actions;

export default formSlice.reducer;
