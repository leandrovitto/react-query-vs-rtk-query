"use client";
import { use, useEffect, useState } from "react";
import { useGetPostsQuery, useLazyGetPostsQuery } from "../services/post";
import Debugger from "./Debugger";
import { useTimer } from "../hook/use-timer";

const PostsWithRTKTwo = () => {
  const { start, pause, time } = useTimer();

  const { data, error, isLoading, refetch } = useGetPostsQuery();
  /*   const [trigger, { data, error, isLoading }] = useLazyGetPostsQuery({
    refetchOnReconnect: true,
  }); */

  useEffect(() => {
    if (isLoading) {
      start();
    } else {
      pause();
    }
  }, [isLoading, pause, start]);

  return (
    <div>
      <Debugger
        title="First 2 Posts"
        subtitle={time}
        data={data && data.length > 2 ? data?.slice(0, 2) : []}
      >
        <div>{isLoading && <p>Loading...</p>}</div>
      </Debugger>
    </div>
  );
};

export default PostsWithRTKTwo;
