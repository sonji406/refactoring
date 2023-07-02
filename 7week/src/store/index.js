import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import initialState from "./initialState";
import calendarReducer from "../services/slices/calendar";
import eventReducer from "../services/slices/events";

const reducer = {
  calendar: calendarReducer,
  event: eventReducer,
};

const store = configureStore({
  reducer,
  initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
