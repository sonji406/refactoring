import { createAction, createSlice } from "@reduxjs/toolkit";
import initialState from "../../store/initialState";

export const toggleCalendarView = createAction("calendar/toggleView");
export const changeCalendarDate = createAction("calendar/changeDate");

export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    toggleView: (state) => {
      if (state.viewMode === "daily") {
        state.viewMode = "weekly";
      } else if (state.viewMode === "weekly") {
        state.viewMode = "daily";
      }
    },
    changeDate: (state, action) => {
      state.currentDateToIso = action.payload;
    },
    newDate: (state, action) => {
      const { viewMode, currentDateToIso, increment } = action.payload;
      const currentDate = new Date(currentDateToIso);
      let newDate = new Date(currentDate.getTime());

      if (viewMode === "daily") {
        newDate.setDate(currentDate.getDate() + increment);
      } else if (viewMode === "weekly") {
        newDate.setDate(currentDate.getDate() + increment * 7);
      }

      state.currentDateToIso = newDate.toISOString();
    },
    nextchangeDate: (state, action) => {
      const { viewMode, currentDateToIso } = action.payload;
      const currentDate = new Date(currentDateToIso);
      let nextDate = new Date(currentDate.getTime());

      if (viewMode === "daily") {
        nextDate.setDate(currentDate.getDate() + 1);
      } else if (viewMode === "weekly") {
        nextDate.setDate(currentDate.getDate() + 7);
      }

      state.currentDateToIso = nextDate.toISOString();
    },
    prevchangeDate: (state, action) => {
      const { viewMode, currentDateToIso } = action.payload;
      const currentDate = new Date(currentDateToIso);
      let prevDate = new Date(currentDate.getTime());

      if (viewMode === "daily") {
        prevDate.setDate(currentDate.getDate() - 1);
      } else if (viewMode === "weekly") {
        prevDate.setDate(currentDate.getDate() - 7);
      }

      state.currentDateToIso = prevDate.toISOString();
    }
  },
});

export const { toggleView, changeDate, newDate } = calendarSlice.actions;

export default calendarSlice.reducer;
