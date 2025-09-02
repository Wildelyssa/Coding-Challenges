"use client";

import { useEffect, useMemo, useState } from "react";
import { ISortBy, IUser } from "./data/lib";
import User from "./User";
import Controls from "./data/Controls";

const FetchUsers = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<ISortBy>("name-asc");
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);

        const data: IUser[] = await response.json();
        setUsers(data);
      } catch (error) {
        // get the error message if there is one
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

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

  return (
    <div className="flex flex-col gap-2">
      <h2>Search Users</h2>
      <Controls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {/* show a spinner or skeleton loader for load- for now show text as placeholder */}
      {loading && <p>Loading Users.....</p>}
      {/* could add a retry button to retry on error */}
      {error && <p className="text-red-500">{error}</p>}
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
