"use client";
import React, { useEffect } from "react";
import Debugger from "./Debugger";
import { QueryCache, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useTimer } from "../hook/use-timer";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetchPosts = (): Promise<PostModel[]> =>
  axios
    .get("/posts")
    .then((response) => response.data)
    .then((data) => {
      return data.length > 4 ? data.splice(0, 4) : data;
    });

const PostsWithReactQuery = () => {
  const { start, pause, time } = useTimer();

  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching, refetch } = useQuery({
    queryKey: ["repoData"],
    /* queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      return data.length > 2 ? data.splice(0, 2) : data;
    }, */
    queryFn: fetchPosts,
    staleTime: Infinity,
  });

  const printCache = () => {
    const c = queryClient.getQueryCache().findAll();
    console.log("c", c);
  };

  useEffect(() => {
    if (isLoading) {
      start();
    } else {
      pause();
    }
  }, [isLoading, pause, start]);

  return (
    <div>
      <Debugger title="Posts With React Query" subtitle={time} data={data}>
        <div>{isLoading && <p>Loading...</p>}</div>
        <div>{isFetching && <p>Fetching...</p>}</div>
      </Debugger>
      <button className="btn" onClick={() => refetch()}>
        Fetch React Query
      </button>
      <button className="btn" onClick={() => printCache()}>
        printCache
      </button>
    </div>
  );
};

export default PostsWithReactQuery;
