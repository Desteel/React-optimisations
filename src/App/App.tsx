import React from "react";
// import PassObjectProps from "components/withProps/PassObjectProps";
// import TimerClass from "components/withoutProps/TimerClass";
// import TimerFunctional from "components/withoutProps/TimerFunctional";
// import CounterClassBind from "components/withProps/CounterClassBind";
// import CounterClass from "components/withProps/CounterClass";
import CounterFunc from "components/withProps/CounterFunc";
import CounterFuncOptimised from "components/withProps/CounterFuncOptimised";
// import PassMemoObjectProps from "components/withProps/PassMemoObjectProps";

function App() {
  return (
    <>
      {/* <TimerClass />
      <br />
      <TimerFunctional />
      <br /> */}
      <CounterFuncOptimised />
      <CounterFunc />
      {/* <br /> */}

      {/* <br />
      <CounterClass />
      <br />
      <CounterClassBind />
      <br />
      <PassObjectProps />
      <br />
      <PassMemoObjectProps /> */}
    </>
  );
}

export default React.memo(App);
