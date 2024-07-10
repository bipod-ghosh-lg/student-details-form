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
