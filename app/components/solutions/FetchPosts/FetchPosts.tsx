"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Controls from "./components/Controls";
import Post from "./components/Post";
import { ApiPost, IPost } from "./lib/lib";

const FetchPosts = () => {
  const [sortBy, setSortBy] = useState<string>("1");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState<number>(1);
  const POSTS_PER_PAGE = 5;

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Respnse status: ${response.status}`);
      }
      const result = await response.json();

      const transformedResult: IPost[] = result.map((post: ApiPost) => ({
        ...post,
        userId: String(post.userId),
      }));

      setPosts(transformedResult);
      // initial state and fetch logic
    } catch (error) {
      // catch any errors and get error message if there is one
      setError(
        error instanceof Error
          ? error.message
          : "There was an issue fecthing posts please try again"
      );
    } finally {
      // reset
      setLoading(false);
    }
  }, [page]);

  const postsToDisplay = useMemo(
    () => posts.filter((post) => post.userId === sortBy),
    [posts, sortBy]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const pageButtonClasses =
    "bg-pink-500 hover:bg-pink-600 hover:cursor-pointer rounded-md p-2 text-white/90 disabled:opacity-50 disabled:hover:bg-pink-500 font-bold min-w-[120px]";

  return (
    <div className="flex flex-col gap-4">
      <>
        <div className="flex flex-col gap-1 rounded-md">
          <h2 className="text-lg font-bold">Filter Posts</h2>
          <Controls posts={posts} sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Posts</h2>
          {loading && (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="bg-white/10 rounded-md h-[148px]" />
              ))}
            </>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center text-red-600 w-full h-[740px] bg-white/10">
              <span className="text-red-600">{error}</span>
            </div>
          )}
          {!loading && !error && postsToDisplay.length === 0 && (
            <div className=" rounded-md flex flex-col items-center justify-center w-full h-[740px] bg-white/20">
              <span>No posts found</span>
            </div>
          )}
          {postsToDisplay.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </>
      <div className="flex flex-row gap-2">
        <button
          disabled={page === 1}
          className={pageButtonClasses}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <button
          disabled={posts.length < POSTS_PER_PAGE}
          className={pageButtonClasses}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchPosts;
