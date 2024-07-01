// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice/formSlice";
import loginReducer from "./slice/loginSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    login: loginReducer,
  },
});

export default store;
