// alumniFormdata slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stepLength: 7,
  currentStep: 1,
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
  personalValidationErrors: false,
  addressValidationErrors: false,
  shippingValidationErrors: false,
  currentRoleValidationErrors: false,
  educationValidationErrors: false,
  workingValidationErrors: false,
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
      state.validationErrors = { ...state.validationErrors, ...action.payload };
    },
    getFormData(state) {
      return state;
    },

    submitForm(state, action) {
      const data = JSON.stringify(state);
      const purseData = JSON.parse(data);
      // console.log(purseData);
      state.validationErrors.submitClicked = true;
      if (state.currentRole === "employer") {
        if (
          !state.personalValidationErrors ||
          !state.addressValidationErrors ||
          !state.shippingValidationErrors ||
          !state.currentRoleValidationErrors ||
          !state.educationValidationErrors ||
          !state.workingValidationErrors
        ) {
          console.log("Please fill all the required fields from store.");
        } else {
          console.log("Form submitted successfully:", purseData);
        }
      } else {
        if (
          !state.personalValidationErrors ||
          !state.addressValidationErrors ||
          !state.shippingValidationErrors ||
          !state.currentRoleValidationErrors ||
          !state.educationValidationErrors
        ) {
          console.log("Please fill all the required fields from store.");
        } else {
          console.log("Form submitted successfully:", purseData);
        }
      }
    },
    validateForm(state, action) {
      const errors = {};
      const {
        firstName,
        lastName,
        email,
        phone,
        whatsapp,
        dob,
        gender,
        country,
        states,
        citie,
        zipcode,
        streetAddress,
        landmark,
        shippingCountry,
        shippingState,
        shippingCitie,
        shippingZipcode,
        shippingStreetAddress,
        shippingLandmark,
        companyName,
        companyGstNumber,
        companyAddress,
        companyCountry,
        companyState,
        companyCitie,
        companyZipcode,
        currentRole,
        institution,
        degree,
        fieldOfStudy,
        graduationYear,
        educationCountry,
        educationState,
        educationCitie,
        workingCompany,
        workingCountry,
        workingState,
        workingCitie,
        workingIndustry,
        workingRole,
      } = state;

      switch (action.payload.step) {
        case 1:
          if (!firstName) errors.firstName = "Please fill in the First Name.";
          if (!lastName) errors.lastName = "Please fill in the Last Name.";
          if (!email) errors.email = "Please fill in the Email Address.";
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            errors.email = "Please enter a valid email address.";
          if (!phone) errors.phone = "Please fill in the Phone Number.";
          if (!whatsapp)
            errors.whatsapp = "Please fill in the WhatsApp Number.";
          if (!dob) errors.dob = "Please fill in the Date of Birth.";
          if (!gender) errors.gender = "Please select a Gender.";
          state.validationErrors.personal = Object.keys(errors).length === 0;
          break;
        case 2:
          if (!country) errors.country = "Please fill in the Country.";
          if (!states) errors.state = "Please fill in the State.";
          if (!citie) errors.citie = "Please fill in the City.";
          if (!zipcode) errors.zipcode = "Please fill in the Zipcode.";
          if (!streetAddress)
            errors.streetAddress = "Please fill in the Street Address.";
          state.validationErrors.address = Object.keys(errors).length === 0;
          break;
        case 3:
          if (!shippingCountry)
            errors.shippingCountry = "Please fill in the Shipping Country.";
          if (!shippingState)
            errors.shippingState = "Please fill in the Shipping State.";
          if (!shippingCitie)
            errors.shippingCitie = "Please fill in the Shipping City.";
          if (!shippingZipcode)
            errors.shippingZipcode = "Please fill in the Shipping Zipcode.";
          if (!shippingStreetAddress)
            errors.shippingStreetAddress =
              "Please fill in the Shipping Street Address.";
          state.validationErrors.shipping = Object.keys(errors).length === 0;
          break;
        case 5:
          if (!currentRole)
            errors.currentRole = "Please fill in the Current Role.";
          state.validationErrors.role = Object.keys(errors).length === 0;
          break;
        case 6:
          if (!institution)
            errors.institution = "Please fill in the Institution.";
          if (!degree) errors.degree = "Please fill in the Degree.";
          if (!fieldOfStudy)
            errors.fieldOfStudy = "Please fill in the Field of Study.";
          if (!graduationYear)
            errors.graduationYear = "Please fill in the Graduation Year.";
          if (!educationCountry)
            errors.educationCountry = "Please fill in the Education Country.";
          if (!educationState)
            errors.educationState = "Please fill in the Education State.";
          if (!educationCitie)
            errors.educationCitie = "Please fill in the Education City.";
          state.validationErrors.education = Object.keys(errors).length === 0;
          break;
        case 7:
          if (!workingCompany)
            errors.workingCompany = "Please fill in the Working Company.";
          if (!workingCountry)
            errors.workingCountry = "Please fill in the Working Country.";
          if (!workingState)
            errors.workingState = "Please fill in the Working State.";
          if (!workingCitie)
            errors.workingCitie = "Please fill in the Working City.";
          if (!workingIndustry)
            errors.workingIndustry = "Please fill in the Working Industry.";
          if (!workingRole)
            errors.workingRole = "Please fill in the Working Role.";
          state.validationErrors.working = Object.keys(errors).length === 0;
          break;
        default:
          break;
      }

      return errors;
    },
  },
});

export const {
  updateFormData,
  resetFormData,
  setValidationErrors,
  getFormData,
  submitForm,
  validateForm,
} = formDataSlice.actions;

export default formDataSlice.reducer;
