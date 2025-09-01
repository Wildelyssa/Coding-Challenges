"use client";

import { Dispatch, SetStateAction } from "react";

const SearchInput = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <label htmlFor="searchTitle" className="sr-only">
        Search Events
      </label>
      <input
        type="search"
        autoComplete="off"
        aria-label="Search events by title"
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "16px",
          color: "black",
        }}
        value={search}
        id="searchTitle"
        placeholder="Search Events"
      />
    </>
  );
};

export default SearchInput;
