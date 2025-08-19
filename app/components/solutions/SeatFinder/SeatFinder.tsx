"use client";
import React, { useState } from "react";

const SeatFinder = () => {
  type Seat = "X" | null;
  type Row = Seat[];

  const TOTAL_SEATS = 7;

  const [row, setRow] = useState<Row>(Array<Seat>(TOTAL_SEATS).fill(null));
  const [noSeatsLeft, setNoSeatsLeft] = useState<boolean>(false);

  function handleBookSeat() {
    for (let i = row.length - 1; i >= 0; i--) {
      if (row[i] === null) {
        // 1. Copy the row
        const newRow = [...row];

        // 2. Update exactly ONE seat
        newRow[i] = "X";

        // 3. Save to state
        setRow(newRow);
        setNoSeatsLeft(false);

        // 4. Stop after booking one seat
        return;
      }
    }
    // if no null values are found in the entire array
    setNoSeatsLeft(true);
  }

  return (
    <div className="p-4">
      <h2>Cinema Booking</h2>
      <div className="flex gap-2">
        {row.map((seat, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center border rounded"
            style={{ backgroundColor: seat === "X" ? "red" : "white" }}
          >
            {seat ?? "-"}
          </div>
        ))}
      </div>
      {noSeatsLeft && <p>No seats are available</p>}
      <button
        onClick={handleBookSeat}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Book Next Seat
      </button>
    </div>
  );
};

export default SeatFinder;
