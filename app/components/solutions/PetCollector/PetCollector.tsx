"use client";
import React, { useState } from "react";

const PetCollector = () => {
  type Animal = "C" | "D" | null;
  type Kennels = Animal[];

  const TOTAL_KENNELS = 10;
  const [kennels, setKennels] = useState<Kennels>(
    Array<Animal>(TOTAL_KENNELS).fill(null)
  );
  const [message, setMessage] = useState("");

  // add cats from the left
  function addCat() {
    for (let i = 0; i < kennels.length; i++) {
      if (kennels[i] === null) {
        // clone array
        const newKennelsArray = [...kennels];
        //   add new value
        newKennelsArray[i] = "C";
        setKennels(newKennelsArray);
        setMessage("Dasa Cat 🐱");
        // break after one successful pass
        return;
      }
    }
    setMessage("No more rooms left for Cats!");
  }

  // add dogs from the right
  function addDog() {
    for (let i = kennels.length - 1; 1 >= 0; i--) {
      if (kennels[i] === null) {
        // clone array
        const newKennelsArray = [...kennels];
        // update value
        newKennelsArray[i] = "D";
        setKennels(newKennelsArray);
        setMessage("Dasa Dog 🐶");
        // break after one successful pass
        return;
      }
    }
    setMessage("No more rooms left for Dogs!");
  }

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">🐾 Pet Hotel 🐾</h2>

      <div className="flex gap-2 mt-2">
        {kennels.map((space, i) => (
          <div
            key={i}
            className="w-10 h-10 flex items-center justify-center border rounded"
            style={{
              backgroundColor:
                space === "C" ? "pink" : space === "D" ? "plum" : "white",
            }}
          >
            {space === "C" ? "🐱" : space === "D" ? "🐶" : "-"}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={addCat}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 hover:cursor-pointer"
        >
          Add Cat (Left)
        </button>
        <button
          onClick={addDog}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 hover:cursor-pointer"
        >
          Add Dog (Right)
        </button>
      </div>

      {message && <p className="mt-2 text-white">{message}</p>}
    </div>
  );
};

export default PetCollector;
