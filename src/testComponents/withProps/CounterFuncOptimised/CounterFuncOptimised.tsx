import React, { useCallback, useState } from "react";
import { unstable_trace as trace } from "scheduler/tracing";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button = React.memo(({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
});

function CounterFuncOptimised() {
  const [count, setCount] = useState(0);

  const dec = useCallback(() => {
    trace("dec", performance.now(), () => {
      setCount((prevCount) => prevCount - 1);
    });
  }, []);

  const inc = useCallback(() => {
    trace("inc", performance.now(), () => {
      setCount((prevCount) => prevCount + 1);
    });
  }, []);

  return (
    <div>
      <Button onClick={dec}>-</Button>
      <div>CounterFuncOptimised {count}</div>
      <Button onClick={inc}>+</Button>
    </div>
  );
}

export default CounterFuncOptimised;
