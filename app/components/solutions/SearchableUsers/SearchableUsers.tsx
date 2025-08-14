"use client";

import { useState } from "react";
import { User } from "./types";

// practise defining the function in the same component- this is for the sake of live coding practise
function UserCard({ user }: { user: User }) {
  return (
    <div
      className="flex flex-col gap-1 p-4 border border-gray-300 rounded-md bg-white/10"
      key={user.id}
    >
      <span>
        <strong>{user.name}</strong>
      </span>
      <span>{user.email}</span>
    </div>
  );
}

const SearchableUsers = () => {
  // starter data and types:
  // The users prop is an array of objects:
  // type User = {
  //   id: number;
  //   name: string;
  //   email: string;
  // };

  // UI:
  // A search input at the top.
  // A list of matching users underneath.
  // Each user shown in a small “card” with name in bold and email below.

  // Filtering:
  // Should filter as you type (controlled input).
  // Ignore case when filtering.

  // Accessibility:
  // The input should have an accessible label (visible or via aria-label).

  // example starting data
  const sampleUsers: User[] = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Davis", email: "charlie@example.com" },
  ];

  // initial thoughts
  // depends if we want to only search by name or email, or by both name and email in either one or 2 separate inputs
  // assuming we are only searching by name for the purposes of simplicity- can easily extend to email if needed and discuss requirements for that

  const [search, setSearch] = useState<string>("");

  const filteredUsers = sampleUsers.filter((user) =>
    // remove case sensitivity from both search input value and the sample data name
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full gap-4">
      {/* add sr-only class to hide in the layout but still be available for screen readers */}
      <label htmlFor="search" className="sr-only">
        Search users by name
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search Users"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-rose-400 rounded-md"
      />
      <div className="flex flex-row gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p className="text-gray-400">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchableUsers;
