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

const SetCountContext = React.createContext<Dispatch<
  SetStateAction<number>
> | null>(null);

const CountContext = React.createContext<number>(0);

const Button = React.memo(({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
});

function Counter() {
  const setCount = useContext(SetCountContext)!;
  const count = useContext(CountContext);

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

function TestContextSeparated() {
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
    <SetCountContext.Provider value={setCount}>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </SetCountContext.Provider>
  );
}

export default TestContextSeparated;
