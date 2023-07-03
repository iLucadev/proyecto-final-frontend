import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "../features/authSlice";

const reducer = combineReducers({
  auth,
});

const store = configureStore({
  reducer,
});

export default store;
