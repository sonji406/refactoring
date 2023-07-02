import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addEvent, removeEvent } from "../../services/slices/events";

function EventDetails() {
  const { eventId } = useParams();
  const { eventSchedule, eventDetails} = useSelector(state => state.event);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eventTitle, setEventTitle] = useState(eventDetails[eventId].title);
  const [eventContent, setEventContent] = useState(eventDetails[eventId].content);

  let eventDate, eventStartTime, eventEndTime;

  for (const date in eventSchedule) {
    const hours = Object.keys(eventSchedule[date]).filter(hour => eventSchedule[date][hour] === eventId);
    if (hours.length > 0) {
      eventDate = date;
      eventStartTime = Math.min(...hours);
      eventEndTime = Math.max(...hours);
      break;
    }
  }

  const [startDate, setEventDate] = useState(eventDate);
  const [startTime, setEventStartTime] = useState(eventStartTime);
  const [endTime, setEventEndTime] = useState(eventEndTime);

  const onTitleChange = (event => setEventTitle(event.target.value));
  const onContentChange = (event => setEventContent(event.target.value));
  const onStartTime = (event => setEventStartTime(event.target.value));
  const onEndTime = (event => setEventEndTime(event.target.value));
  const onDateChange = (event => setEventDate(event.target.value));

  const saveEvent = () => {
    try {
      dispatch(
        addEvent({
          eventId: eventId,
          date: startDate,
          title: eventTitle,
          content: eventContent,
          start: parseInt(startTime),
          end: parseInt(endTime)
        })
      )
    }
    catch (error) {
      alert(error.message);
    }
  }

  const deleteEvent = () => {
    dispatch(
      removeEvent({
        eventId: eventId,
      })
    )
    navigate("/");
  }

  return (
    <>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <span className="w-32 font-bold">Title:</span>
          <input
            type="text"
            value={eventTitle}
            onChange={onTitleChange}
            className="border rounded p-2 flex-grow"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <span className="w-32 font-bold">Content:</span>
          <textarea
            value={eventContent}
            onChange={onContentChange}
            className="border rounded p-2 flex-grow"
          ></textarea>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <span className="w-32 font-bold">Date:</span>
          <input
            type="date"
            value={startDate}
            onChange={onDateChange}
            className="border rounded p-2 flex-grow"
          ></input>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <span className="w-32 font-bold">Start time:</span>
          <select
            defaultValue={startTime}
            onChange={onStartTime}
            className="border rounded p-2 flex-grow"
          >
            {Array.from(Array(24).keys()).map((hour) => (
              <option value={hour} key={hour}>{`${hour} : 00`}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center mb-2">
          <span className="w-32 font-bold">End time:</span>
          <select
            defaultValue={endTime}
            onChange={onEndTime}
            className="border rounded p-2 flex-grow"
          >
            {Array.from(Array(24).keys()).map((hour) => (
              <option value={hour} key={hour}>{`${hour} : 00`}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mb-4 text-center">
        <button
          onClick={deleteEvent}
          className="bg-red-400 text-white px-4 py-2 rounded mr-2 w-1/3 hover:bg-red-500"
        >
          DELETE
        </button>
        <button
          onClick={saveEvent}
          className="bg-blue-400 text-white px-4 py-2 rounded w-1/3 hover:bg-blue-500"
        >
          SAVE
        </button>
      </div>
    </>
  );
}

export default EventDetails;
