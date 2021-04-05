import React, { useCallback, useState } from "react";
import Child from "./components/Child";

type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
};

const Button = React.memo(({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
});

function PassObjectProps() {
  const [state, setState] = useState({
    a: 0,
    b: 0,
  });

  // const changeState = useCallback(() => {
  //   setState((prevState) => ({
  //     a: prevState.a + 1,
  //     b: prevState.b - 1,
  //   }));
  // }, []);

  const changeState = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
    }));
  }, []);

  return (
    <div>
      PassObjectProps
      <br />
      <Child obj={state} />
      <Button onClick={changeState}>change state</Button>
    </div>
  );
}

export default PassObjectProps;
