import { noop } from "lodash";

function Row({ onClick = noop, event = {} }) {
  return (
    <div className="w-1/2 p-2 border-b border-r" onClick={onClick}>
      <span className="truncate">{event.title || ""}</span>
    </div>
  );
}

export default Row;
