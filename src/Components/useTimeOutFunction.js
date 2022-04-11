import { useEffect, useRef } from "react";

const useTimeOutFunction = (callBack, delay) => {
  const stableCallBack = useRef(callBack);

  useEffect(() => {
    stableCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    const tick = () => stableCallBack.current();
    if (typeof delay !== "number") return;

    const t = setTimeout(tick, delay);

    return () => clearTimeout(t);
  }, [callBack]);
};

export default useTimeOutFunction;
