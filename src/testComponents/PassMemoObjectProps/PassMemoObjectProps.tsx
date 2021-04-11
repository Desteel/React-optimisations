import React, { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button = React.memo(({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
});

function PassMemoObjectProps() {
  const [state, setState] = useState({
    a: 0,
    b: 0,
  });

  // const savedStateValues = useRef<number[]>();

  const changeState = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
    }));
  }, []);

  // useEffect(() => {
  //   if (savedStateValues.current) {
  //     savedStateValues.current = Object.values(state);
  //   }
  // }, [state]);

  // const changeState = useCallback(() => {
  //   setState((prevState) => ({
  //     a: prevState.a + 1,
  //     b: prevState.b - 1,
  //   }));
  // }, []);

  // const fakeGetter = useMemo(
  //   () => ({
  //     ...state,
  //   }),
  //   [state]
  // );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedState = useMemo(() => state, [state.a, state.b]);

  return (
    <div>
      PassMemoObjectProps
      <br />
      <Child obj={memoizedState} />
      <Button onClick={changeState}>change state</Button>
    </div>
  );
}

export default PassMemoObjectProps;
