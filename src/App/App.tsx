import React from "react";
import PassObjectProps from "components/withProps/PassObjectProps";
import TimerClass from "components/withoutProps/TimerClass";
import TimerFunctional from "components/withoutProps/TimerFunctional";
import CounterClass from "components/withProps/CounterClass";
import CounterFunc from "components/withProps/CounterFunc";
import PassMemoObjectProps from "components/withProps/PassMemoObjectProps";

function App() {
  return (
    <>
      <TimerClass />
      <br />
      <TimerFunctional />
      <br />
      <CounterFunc />
      <br />
      <CounterClass />
      <br />
      <PassObjectProps />
      <br />
      <PassMemoObjectProps />
    </>
  );
}

export default App;
