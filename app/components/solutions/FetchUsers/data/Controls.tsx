import { Dispatch, SetStateAction } from "react";
import { ISortBy, sortOptions } from "./lib";

const Controls = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}: {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  sortBy: ISortBy;
  setSortBy: Dispatch<SetStateAction<ISortBy>>;
}) => {
  return (
    <div className="flex flex-row gap-2">
      <label htmlFor="searchUsers" className="sr-only">
        Search users by name or email
      </label>
      <input
        className="bg-white/70 text-black rounded-md p-2"
        id="searchUsers"
        type="search"
        placeholder="Search Users"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      ></input>
      <label className="sr-only" htmlFor="sortAlphabetically">
        Sort users alphabetically by company name or name
      </label>

      <select
        className="bg-white/70 text-black rounded-md p-2"
        id="sortAlphabetically"
        name="Sort Alphabetically"
        onChange={(e) => setSortBy(e.target.value as ISortBy)}
        value={sortBy}
      >
        {sortOptions.map((option, i) => (
          <option key={`${i}${option}`} value={option}>
            {option.replace("-", " ")}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Controls;
