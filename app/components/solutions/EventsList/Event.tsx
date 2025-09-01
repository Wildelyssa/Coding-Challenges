import moment from "moment";
import { DATE_FORMAT } from "./data/eventsData";

const Event = ({
  title,
  date,
  eventLocation,
}: {
  title: string;
  date: string;
  eventLocation: string;
}) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 50)",
        borderRadius: "8px",
        border: `solid white 2px`,
        color: "black",
        width: "100%",
      }}
    >
      <p>
        <strong>{title}</strong>
      </p>
      <p>{moment(date).format(DATE_FORMAT)}</p>
      <p>{eventLocation}</p>
    </div>
  );
};

export default Event;
