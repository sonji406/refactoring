import Daily from "../Daily";

function Weekly({ weekDates }) {
  return (
    <div className="grid grid-cols-7 text-center">
      {weekDates.map((date, index) => (
        <Daily key={index} currentDate={date.toISOString().slice(0, 10)} />
      ))}
    </div>
  );
}

export default Weekly;
