const date = new Date();
date.setHours(date.getHours() + 9);

const initialState = {
  currentDateToIso: date.toISOString(),
  viewMode: "daily",
};

export default initialState;
