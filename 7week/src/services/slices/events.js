import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventSchedule: {
      "2023-06-30": {
        3: "event1",
        4: "event1",
        5: "event1",
        1: "event2",
        2: "event2",
      },
    },
    eventDetails: {
      event1: {
        title: "Event 1 Title",
        content: "Event 1 Content",
      },
      event2: {
        title: "Event 2 Title",
        content: "Event 2 Content",
      },
    },
  },
  reducers: {
    addEvent: (state, action) => {
      const { date, title, content, start, end } = action.payload;
      const { eventSchedule, eventDetails } = state;

      const eventId =
        Object.keys(eventDetails).length > 0
          ? `event${
              Math.max(
                ...Object.keys(eventDetails).map((id) =>
                  Number(id.substring(5))
                )
              ) + 1
            }`
          : "event1";

      let hours = [];
      for (let i = start; i <= end; i++) {
        hours.push(String(i));
      }

      hours.forEach((hour) => {
        if (!Object.keys(eventSchedule).includes(date)) {
          eventSchedule[date] = {};
        } else if (eventSchedule[date][hour]) {
          throw new Error("이미 이벤트가 있음!");
        }
        eventSchedule[date][hour] = eventId;
      });

      eventDetails[eventId] = {
        title,
        content,
      };
    },
    modEvent: (state, action) => {
      const { eventId, time, title, content } = action.payload;
      state.eventSchedule[eventId].time = time;
      state.eventDetails[eventId].title = title;
      state.eventDetails[eventId].content = content;
    },
    removeEvent: (state, action) => {
      const { eventId } = action.payload;
      const { eventSchedule, eventDetails } = state;

      for (const date in eventSchedule) {
        for (const hour in eventSchedule[date]) {
          if (eventSchedule[date][hour] === eventId) {
            delete eventSchedule[date][hour];
          }
        }
      }

      delete eventDetails[eventId];
    },
  },
});

export const { addEvent, modEvent, removeEvent } = eventSlice.actions;

export default eventSlice.reducer;
