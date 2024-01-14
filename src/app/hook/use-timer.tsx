import { useCallback, useEffect, useState } from "react";

const interval =
  (delay = 0) =>
  /** @param {() => void} callback */ (callback: any) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const use1Second = interval(1);

export const useTimer = ({
  initialSeconds = 0,
  initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);

  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    pause();
    reset();
  };

  use1Second(tick);

  const time = (seconds && Math.round((1 / seconds) * 100) / 100) + "s";

  return { pause, time, reset, running, seconds, start, stop };
};
