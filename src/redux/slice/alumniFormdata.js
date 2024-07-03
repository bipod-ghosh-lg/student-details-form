import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whatsapp: "",
  dob: "",
  gender: "Male",
  country: "",
  state: "",
  citie: "",
  zipcode: "",
  streetAddress: "",
  landmark: "",
    shippingCountry: "",
    shippingState: "",
    shippingCitie: "",
    shippingZipcode: "",
    shippingStreetAddress: "",
    shippingLandmark: "",
  checkbox: false,
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
      updateFormData(state, action) {
          console.log(action.payload);
      // Action payload should contain updated form data
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormData(state) {
      return initialState; // Reset form data to initial state
    },
  },
});

export const { updateFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
