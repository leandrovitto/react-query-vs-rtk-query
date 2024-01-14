import Counter from "./components/Counter";
import Debugger from "./components/Debugger";
import Mount from "./components/Mount";
import PostsWithFetch from "./components/PostsWithFetch";
import PostsWithRTK from "./components/PostsWithRTK";
import PostsWithRTKTwo from "./components/PostsWithRTKTwo";
import PostsWithReactQuery from "./components/PostsWithReactQuery";

const objDemo = {
  name: "John",
  age: 30,
  city: "New York",
};

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-4xl bg-blue-500 text-center mx-4 p-2 rounded-md text-white font-bold">
      {children}
    </p>
  );
};

export default function Home() {
  return (
    <main className="p-24 ">
      <div className="grid grid-cols-3  justify-center mb-2">
        <div>
          <Text>Fetch/Axios</Text>
          <div className="flex flex-col">
            {/*  <Counter /> */}
            <Mount>
              <PostsWithFetch />
            </Mount>
          </div>
        </div>
        <div>
          <Text>Redux RTK</Text>
          <div className="flex flex-col">
            {/*  <Mount>
              <PostsWithRTKTwo />
            </Mount> */}
            <Mount>
              <PostsWithRTK />
            </Mount>
          </div>
        </div>
        <div>
          <Text>React Query</Text>
          <div className="flex flex-col">
            <Mount>
              <PostsWithReactQuery />
            </Mount>
            {/*  <Mount>
              <PostsWithReactQuery />
            </Mount> */}
          </div>
        </div>
      </div>

      <Debugger title="Debugger" data={objDemo} />
    </main>
  );
}
