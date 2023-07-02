import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Row from "../Row";

function Daily({ currentDate }) {
  const eventState = useSelector((state) => state.event);
  const dailySchedule = eventState.eventSchedule[currentDate] || {};
  const navigate = useNavigate();

  return (
    <div className="border-2 text-center">
      {[...Array(24)].map((_, hour) => {
        const eventId = dailySchedule[hour];
        const eventDetail = eventId ? eventState.eventDetails[eventId] : {};

        const handleClick = () => {
          if (!eventId) {
            navigate("/events/new");
          } else {
            navigate(`/events/${eventId}`);
          }
        };

        return (
          <div key={hour} className="flex">
            <div className="w-1/2 p-2 border-b border-r">{`${hour}:00`}</div>
            <Row onClick={handleClick} event={eventDetail} />
          </div>
        );
      })}
    </div>
  );
}

export default Daily;
