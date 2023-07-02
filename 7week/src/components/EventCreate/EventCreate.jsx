import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addEvent } from "../../services/slices/events";

function EventCreate() {
  const currentDateToIso = new Date(
    useSelector((state) => state.calendar.currentDateToIso)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eventTitle, setEventTitle] = useState("");
  const [eventContent, setEventContent] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");

  const inputTitle = (event) => {
    setEventTitle(event.target.value);
  };

  const inputContent = (event) => {
    setEventContent(event.target.value);
  };

  const inputDate = (event) => {
    setEventDate(event.target.value);
  };

  const startTime = (event) => {
    setEventStartTime(Number(event.target.value));
  };

  const endTime = (event) => {
    setEventEndTime(Number(event.target.value));
  };

  const saveEvent = () => {
    try {
      dispatch(
        addEvent({
          date: currentDateToIso.toISOString().slice(0, 10),
          title: eventTitle,
          content: eventContent,
          start: eventStartTime,
          end: eventEndTime,
        })
      );
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-1/2">
      <div className="border p-2 text-white bg-red-300 text-center">
        {currentDateToIso.toISOString().slice(0, 10)}
      </div>
      <div className="grid grid-cols-1">
        <input
          className="border-2 p-2"
          placeholder="tilte"
          onChange={inputTitle}
        ></input>
        <textarea
          className="border-2 p-2"
          placeholder="content"
          onChange={inputContent}
        ></textarea>
      </div>
      <div>
        <input
          type="date"
          value={currentDateToIso.toISOString().slice(0, 10)}
          onChange={inputDate}
        ></input>
      </div>
      <div className="grid">
        <select className="border-2 p-2" defaultValue="0" onChange={startTime}>
          {Array.from(Array(24).keys()).map((hour) => (
            <option value={hour} key={hour}>{`${hour} : 00`}</option>
          ))}
        </select>
        <select className="border-2 p-2" defaultValue="0" onChange={endTime}>
          {Array.from(Array(24).keys()).map((hour) => (
            <option value={hour} key={hour}>{`${hour} : 00`}</option>
          ))}
        </select>
      </div>
      <div>
        <button
          className="w-full border bg-red-200 text-white text-center p-2 hover:bg-red-500"
          onClick={saveEvent}
        >
          추가
        </button>
      </div>
    </div>
  );
}

export default EventCreate;
