"use client";
import { useEffect, useState } from "react";
import { useGetPostsQuery, useLazyGetPostsQuery } from "../services/post";
import Debugger from "./Debugger";
import { useTimer } from "../hook/use-timer";

const PostsWithRTK = () => {
  const { start, pause, time } = useTimer();

  const { data, error, isLoading, refetch } = useGetPostsQuery();

  useEffect(() => {
    if (isLoading) {
      start();
    } else {
      pause();
    }
  }, [isLoading, pause, start]);

  return (
    <div>
      <Debugger title="Posts With RTK" subtitle={time} data={data}>
        <div>{isLoading && <p>Loading...</p>}</div>
      </Debugger>
      <button className="btn" onClick={() => refetch()}>
        Fetch RTK
      </button>
    </div>
  );
};

export default PostsWithRTK;
