import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toggleView, changeDate } from "../../services/slices/calendar";

function Header() {
  const dispatch = useDispatch();
  const { currentDateToIso, viewMode } = useSelector((state) => state.calendar);
  const [selectedDate, setSelectedDate] = useState(
    new Date(currentDateToIso).toISOString().split("T")[0]
  );

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const updateCurrentDate = () => {
    dispatch(changeDate(selectedDate));
  };

  const buttonStyles = "text-xl font-bold border p-2 border-gray-300";

  return (
    <header>
      <input
        className="text-xl border p-2"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button className={buttonStyles} onClick={updateCurrentDate}>
        DATE
      </button>
      <button
        className={buttonStyles}
        onClick={() => dispatch(changeDate(new Date().toISOString()))}
      >
        TODAY
      </button>
      <button className={buttonStyles} onClick={() => dispatch(toggleView())}>
        {viewMode === "daily" ? "Weekly" : "Daily"}
      </button>
      <Link className={buttonStyles} to="/events/new">
        New Event
      </Link>
    </header>
  );
}

export default Header;
