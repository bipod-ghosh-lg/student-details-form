import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepLength: 7, // Assuming there are 7 steps
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whatsapp: "",
  dob: "",
  gender: "",
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
  companyName: "",
  companyGstNumber: "",
  companyAddress: "",
  companyCountry: "",
  companyState: "",
  companyCitie: "",
  companyZipcode: "",
  currentRole: "",
  institution: "",
  degree: "",
  fieldOfStudy: "",
  graduationYear: "",
  educationCountry: "",
  educationState: "",
  educationCitie: "",
  workingCompany: "",
  workingCountry: "",
  workingState: "",
  workingCitie: "",
  workingIndustry: "",
  workingRole: "",
  checkbox: false,
  validationErrors: {
    personal: false,
    address: false,
    shipping: false,
    role: false,
    education: false,
    working: false,
    submitClicked: false,
  },
};

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    updateFormData(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetFormData() {
      return initialState; // Reset form data to initial state
    },
    setValidationErrors(state, action) {
      console.log(action.payload);
      state.validationErrors = { ...state.validationErrors, ...action.payload };
    },


  },
});

export const { updateFormData, resetFormData, setValidationErrors } =
  formDataSlice.actions;

export default formDataSlice.reducer;
