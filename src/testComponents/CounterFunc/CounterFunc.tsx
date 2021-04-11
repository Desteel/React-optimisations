import React, { useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

function CounterFunc() {
  const [count, setCount] = useState(0);

  function dec() {
    setCount((prevCount) => prevCount - 1);
  }

  function inc() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <Button onClick={dec}>-</Button>
      <div>CounterFunc {count}</div>
      <Button onClick={inc}>+</Button>
    </div>
  );
}

export default CounterFunc;
