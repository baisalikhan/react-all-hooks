import React, { useEffect } from "react";
import useFetch from "../hooks/use-fetch";

const DataFetcher = () => {
  const fetchPosts = () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    );

  const { data, error, loading, fn } = useFetch(fetchPosts);
  useEffect(() => {
    fn();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {error && <p>{error.message}</p>}
      {loading ? (
        "loading..."
      ) : (
        <ul>
          {data?.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DataFetcher;
