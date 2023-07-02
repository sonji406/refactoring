import { useSelector, useDispatch } from "react-redux";
import { newDate } from "../../services/slices/calendar";
import CalendarMain from "./CalendarMain";
import Daily from "./Daily";
import Weekly from "./Weekly";

function Calendar() {
  const viewMode = useSelector((state) => state.calendar.viewMode);
  const currentDateToIso = useSelector((state) => state.calendar.currentDateToIso);
  const currentDate = new Date(currentDateToIso);
  const dispatch = useDispatch();
  const formatDate = currentDateToIso.slice(0, 10);

  const handleDate = (increment) => {
    dispatch(
      newDate({
      viewMode: viewMode,
      currentDateToIso: currentDateToIso,
      increment: increment
      })
    );
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - currentDate.getDay());

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    return date;
  });

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <CalendarMain />
        <button
          className="bg-blue-300 text-white px-4 py-2 rounded"
          onClick={() => handleDate(-1)}
        >
          Prev
        </button>
        <h2 className="font-bold text-lg">{formatDate}</h2>
        <button
          className="bg-blue-300 text-white px-4 py-2 rounded"
          onClick={() => handleDate(1)}
        >
          Next
        </button>
      </div>
      {viewMode === "daily" ? (
        <div className="border p-2 text-white bg-red-300 text-center">
          <div>{currentDate.getDate()}</div>
          <div>{daysOfWeek[currentDate.getDay()]}</div>
        </div>
      ) : (
        <div className="grid grid-cols-7 text-center">
          {daysOfWeek.map((day, i) => (
            <div
              className={`border p-2 text-white ${
                currentDate.getDate() === weekDates[i].getDate()
                  ? "bg-blue-300"
                  : "bg-red-300"
              }`}
              key={day}
            >
              <div>{day}</div>
              <div>{weekDates[i].getDate()}</div>
            </div>
          ))}
        </div>
      )}
      {viewMode === "daily" ? (
        <Daily currentDate={formatDate} />
      ) : (
        <Weekly weekDates={weekDates} />
      )}
    </>
  );
}

export default Calendar;
