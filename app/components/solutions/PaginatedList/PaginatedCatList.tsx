"use client";
import React, { useEffect } from "react";
import { useState } from "react";

const PaginatedCatList = () => {
  // define types and consts needed
  type Item = string;
  const PAGE_SIZE = 5;

  // make a 20 item array
  const items: Item[] = [
    "Whiskers",
    "Mittens",
    "Shadow",
    "Luna",
    "Simba",
    "Oliver",
    "Bella",
    "Chloe",
    "Leo",
    "Milo",
    "Nala",
    "Socks",
    "Cleo",
    "Smokey",
    "Tigger",
    "Salem",
    "Pumpkin",
    "Oreo",
    "Tiger",
    "Gizmo",
  ];

  // mock a delay to simulate waiting for API
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // mock up api call to fetch items from the harcoded list
  const mockFetchItems = async (
    page: number,
    pageSize: number
  ): Promise<Item[]> => {
    await delay(500); // simulate network latency
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  };

  // make basic needed states
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = React.useState(false);

  // load first page on mount
  useEffect(() => {
    const fetchInitial = async () => {
      setLoading(true);
      const res = await mockFetchItems(1, PAGE_SIZE);
      setData(res);
      setLoading(false);
    };
    fetchInitial();
  }, []);

  // add a click handler with loading guard
  const onLoadMore = async () => {
    if (loading) return; //guard no double fetches
    setLoading(true);
    const nextPage = page + 1;
    const res = await mockFetchItems(nextPage, PAGE_SIZE);
    setData((prev) => [...prev, ...res]);
    setPage(nextPage);
    setLoading(false);
  };

  const hasMore = data.length < items.length;

  return (
    // announce updates for screen readers
    <div aria-live="polite" aria-busy={loading ? true : undefined} className="">
      {/* show initial loading message */}
      {data.length === 0 && loading && <p>Making biscuits...</p>}
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
        {hasMore ? (
          <button
            className="bg-gray-300 p-2 rounded-md text-black"
            onClick={onLoadMore}
            disabled={loading}
          >
            {loading ? "Making biscuits…" : "Moar cat"}
          </button>
        ) : (
          <p>You fetched ALL the kitties!</p>
        )}
      </ul>
    </div>
  );
};

export default PaginatedCatList;
