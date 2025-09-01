"use client";

import moment from "moment";
import Event from "./Event";
import { events } from "./data/eventsData";
import SearchInput from "./SearchInput";
import { useMemo, useState } from "react";

const EventsList = () => {
  const [search, setSearch] = useState<string>("");

  const eventsToDisplay = useMemo(() => {
    return events
      .filter((event) =>
        event.title.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => moment(a.date).diff(moment(b.date)));
  }, [events, search]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <SearchInput search={search} setSearch={setSearch} />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "start",
          gap: "8px",
        }}
      >
        {eventsToDisplay.map((event, i) => (
          <Event
            key={`${i}-${event.date}`}
            title={event.title}
            date={event.date}
            eventLocation={event.location}
          />
        ))}
        {eventsToDisplay.length === 0 && (
          <p style={{ color: "red" }}>No results found!</p>
        )}
      </div>
    </div>
  );
};

export default EventsList;
