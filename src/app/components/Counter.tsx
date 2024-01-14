"use client";
import Debugger from "./Debugger";
import {
  decrement,
  increment,
  selectCounter,
} from "../lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";

const Counter = () => {
  const s = useAppSelector(selectCounter);
  const rtk = useAppSelector((state) => state.postApi);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Debugger title="Redux rtk" data={rtk} />
      <Debugger title="Redux Counter" data={s} />
      <button className="btn" onClick={() => dispatch(increment())}>
        Increment +
      </button>
      <button className="btn" onClick={() => dispatch(decrement())}>
        Decrement -
      </button>
    </div>
  );
};

export default Counter;
