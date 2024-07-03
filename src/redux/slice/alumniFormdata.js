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
    city: "",
    zipcode: "",
    streetAddress: "",
    landMark:"",
    organization: "",
    role: "",
    socialLink: "",
    expectations: "",
    communications: "",
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
