import React, { Dispatch, SetStateAction, useContext, useState } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const CounterContext = React.createContext<
  [number, Dispatch<SetStateAction<number>>] | null
>(null);

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

function Counter() {
  const counterContext = useContext(CounterContext)!;

  const [count, setCount] = counterContext;

  const dec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const inc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Button onClick={dec}>-</Button>
      <div>{count}</div>
      <Button onClick={inc}>+</Button>
    </div>
  );
}

function TestContext() {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      <Counter />
    </CounterContext.Provider>
  );
}

export default TestContext;
