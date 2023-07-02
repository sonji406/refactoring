import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Calendar from "./Calendar/Calendar";
import EventCreate from "./EventCreate/EventCreate";
import EventDetails from "./EventDetails/EventDetails";

function App() {
  return (
    <main className="p-[20px]">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/calendar" />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/events/new" element={<EventCreate />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </main>
  );
}

export default App;
