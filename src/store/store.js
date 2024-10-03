// src/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contact/slice"; // You'll create this in the next step

const store = configureStore({
  reducer: combineReducers({
    contact: contactReducer,
  }),
});

export default store;
