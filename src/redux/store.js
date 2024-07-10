// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import loginReducer from "./slice/loginSlice";
import stepSliceReducer from "./slice/alumniStepSlice";
import formDataReducer from "./slice/alumniFormdata";
import locationReducer from "./slice/locationSlice";



const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
    stepsSlice: stepSliceReducer,
    formData: formDataReducer,
    location: locationReducer,
  },
});

export default store;
