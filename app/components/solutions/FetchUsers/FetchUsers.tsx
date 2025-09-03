"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { ISortBy, IUser } from "./data/lib";
import User from "./User";
import Controls from "./data/Controls";

const FetchUsers = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<ISortBy>("name-asc");
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // add useCallback so that the fetch users function can be pulled out of the useEffect to be used in the retry button logic, and add fetchUsers as a dependency to the useEffect without fetchUsers being re-created on every render
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const data: IUser[] = await response.json();
      setUsers(data);
    } catch (error) {
      // get the error message if there is one
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredAndSortedUsers = useMemo(() => {
    // since lowercase searchTerm is used more than once- just lowercase it once for all cases- this is minor though
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercaseSearchTerm) ||
        user.email.toLowerCase().includes(lowercaseSearchTerm)
    );

    let sortedFilteredUsers = [...filteredUsers].sort((a, b) => {
      switch (sortBy) {
        case "company-asc":
          return a.company.name.localeCompare(b.company.name);
        case "company-desc":
          return b.company.name.localeCompare(a.company.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sortedFilteredUsers;
  }, [users, searchTerm, sortBy]);

  const skeletonDivClasses =
    "flex flex-col gap-2 items-center justify-center rounded-md bg-white/10 h-[208px]";

  return (
    <div className="flex flex-col gap-2">
      <h2>Search Users</h2>
      <Controls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {loading && (
        <div className={skeletonDivClasses}>
          <p>Loading Users.....</p>
        </div>
      )}
      {error && (
        <div className={skeletonDivClasses}>
          <p className="text-red-500">{error}</p>
          <button
            className="bg-white/70 rounded-md p-2 text-black hover:bg-white hover:cursor-pointer"
            onClick={fetchUsers}
            type="button"
          >
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && filteredAndSortedUsers.length === 0 && (
        <p>No users found</p>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {filteredAndSortedUsers.map((user) => (
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            companyName={user.company.name}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchUsers;
