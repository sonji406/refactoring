import { useSelector, useDispatch } from "react-redux";
import { changeDate } from "../../services/slices/calendar";

function getDayDetails(date) {
  return {
    dayOfMonth: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    dayOfWeek: date.getDay(),
  };
}

function calculateDaysArray(currentDate) {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    daysInMonth
  ).getDay();

  let daysArray = Array(daysInMonth + firstDayOfMonth)
    .fill(null)
    .map((_, i) => (i >= firstDayOfMonth ? i - firstDayOfMonth + 1 : null));

  for (let i = lastDayOfMonth; i < 6; i++) {
    daysArray.push(null);
  }

  return daysArray;
}

function CalendarMain() {
  const currentDateToIso = new Date(
    useSelector((state) => state.calendar.currentDateToIso)
  );

  const dispatch = useDispatch();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysArray = calculateDaysArray(currentDateToIso);

  const handleDateClick = (currentDate) => {
    const date = currentDate;
    date.setHours(date.getHours() + 9);

    dispatch(changeDate(date.toISOString()));
  };

  const todayDetails = getDayDetails(new Date());

  return (
    <div>
      <div className="grid grid-cols-7 text-center ">
        {daysOfWeek.map((day) => (
          <div
            className={`border p-2 bg-red-300 text-white ${
              day === "Sun"
                ? "text-red-500"
                : day === "Sat"
                ? "text-blue-500"
                : ""
            }`}
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {daysArray.map((day, i) => {
          const date = new Date(
            currentDateToIso.getFullYear(),
            currentDateToIso.getMonth(),
            day
          );

          console.log("date", date);
          const dateDetails = getDayDetails(date);

          const isToday =
            dateDetails.year === todayDetails.year &&
            dateDetails.month === todayDetails.month &&
            dateDetails.dayOfMonth === todayDetails.dayOfMonth;
          const markToday = isToday
            ? "bg-violet-300 font-bold text-white"
            : day
            ? ""
            : "bg-slate-300";
          const textColor = dateDetails.dayOfWeek === 0 ? "text-red-500" : "";

          return (
            <div
              key={i}
              onClick={day ? () => handleDateClick(date) : undefined}
              className={`border p-2 cursor-pointer hover:bg-blue-200 hover:text-white hover:font-bold ${textColor} ${markToday} flex justify-center items-center`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarMain;
