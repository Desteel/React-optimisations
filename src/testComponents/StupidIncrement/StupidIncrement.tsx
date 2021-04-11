// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useState } from "react";

function StupidIncrement() {
  const [count, setCount] = useState(0);

  // const inc = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  const inc = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>CounterFunc {count}</div>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default StupidIncrement;
