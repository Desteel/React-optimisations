import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const CounterContext = React.createContext<
  [number, Dispatch<SetStateAction<number>>] | null
>(null);

const Button = React.memo(({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
});

function Counter() {
  const counterContext = useContext(CounterContext)!;

  const [count, setCount] = counterContext;

  const dec = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, [setCount]);

  const inc = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [setCount]);

  return (
    <div>
      <Button onClick={dec}>-</Button>
      <div>{count}</div>
      <Button onClick={inc}>+</Button>
    </div>
  );
}
const CounterMemo = React.memo(Counter);

function TestContextOptimised() {
  const [count, setCount] = useState(0);

  const intervalIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const { current } = intervalIdRef;

    if (!current) {
      intervalIdRef.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }

    return () => {
      if (current) {
        clearInterval(current);
      }
    };
  }, []);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      <CounterMemo />
    </CounterContext.Provider>
  );
}

export default TestContextOptimised;
