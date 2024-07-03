// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import loginReducer from "./slice/loginSlice";
import stepSliceReducer from "./slice/alumniStepSlice";
import formDataReducer from "./slice/alumniFormdata";


const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
    stepsSlice: stepSliceReducer,
    formData: formDataReducer,
  },
});

export default store;
