"use client";
import { useEffect, useState } from "react";
import { useTimer } from "../hook/use-timer";
import Debugger from "./Debugger";

const PostsWithFetch = () => {
  const { start, pause, time } = useTimer();

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetch = async () => {
    start();
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: PostModel[] = await res.json();
    setPosts(data.length > 4 ? data.splice(0, 4) : data);
    setLoading(false);
    pause();
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div>
      <Debugger title="Posts with Fetch" subtitle={time} data={posts}>
        <div>
          {loading && <p>Loading...</p>}
          {/*  <ul className="list-disc ml-2">
            {posts.map((post) => (
              <li key={post.id}>
                <p className="font-bold">
                  {post.title}({post.id})
                </p>
                <p className="text-xs truncate">{post.body}</p>
              </li>
            ))}
          </ul> */}
        </div>
      </Debugger>
      <button className="btn" onClick={handleFetch}>
        Fetch
      </button>
    </div>
  );
};

export default PostsWithFetch;
