import { Dispatch, SetStateAction } from "react";
import { IPost, getUniqueUserIds } from "../lib/lib";

const Controls = ({
  posts,
  sortBy,
  setSortBy,
}: {
  posts: IPost[];
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
}) => {
  // const filterOptions = getUniqueUserIds(posts);
  // get numbers 1-10 as strings for the moment
  const filterOptions = Array.from({ length: 10 }, (_, i) => String(i + 1));

  console.log(filterOptions, "options");

  return (
    <div className="flex flex-row gap-2 p-2 rounded-md">
      <label className="sr-only">Sort By UserId</label>
      <select
        className="bg-white/80 p-2 rounded-md text-black"
        id="sort-by-user-id"
        name="Sort By UserId"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
      >
        {filterOptions.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Controls;
