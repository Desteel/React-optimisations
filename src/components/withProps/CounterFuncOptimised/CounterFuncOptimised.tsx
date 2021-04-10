import React, { useCallback, useState } from "react";

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
    setCount((prevCount) => prevCount - 1);
  }, []);

  const inc = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
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
