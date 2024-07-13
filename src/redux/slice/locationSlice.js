import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressCountry: "",
  addressCountryIso2: "",
  addressState: "",
  addressStateIso2: "",
  addressCity: "",
  shippingCountry: "",
  shippingCountryIso2: "",
  shippingState: "",
  shippingStateIso2: "",
  shippingCity: "",
  companyDetailsCountry: "",
  companyDetailsCountryIso2: "",
  companyDetailsState: "",
  companyDetailsStateIso2: "",
  companyDetailsCity: "",
  educationCountry: "",
  educationCountryIso2: "",
  educationState: "",
  educationStateIso2: "",
  educationCity: "",
  workingCountry: "",
  workingCountryIso2: "",
  workingState: "",
  workingStateIso2: "",
  workingCity: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer;
