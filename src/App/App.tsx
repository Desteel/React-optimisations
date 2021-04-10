import React, { Profiler } from "react";
// import PassObjectProps from "components/withProps/PassObjectProps";
// import TimerClass from "components/withoutProps/TimerClass";
// import TimerFunctional from "components/withoutProps/TimerFunctional";
// import CounterClassBind from "components/withProps/CounterClassBind";
// import CounterClass from "components/withProps/CounterClass";
import CounterFunc from "components/withProps/CounterFunc";
import CounterFuncOptimised from "components/withProps/CounterFuncOptimised";
// import PassMemoObjectProps from "components/withProps/PassMemoObjectProps";

const callback: (...args: any[]) => void = (
  id,
  phase,
  actualTime,
  baseTime,
  startTime,
  commitTime
) => {
  console.log("");
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
  console.log("");
};

function App() {
  return (
    <>
      {/* <TimerClass />
      <br />
      <TimerFunctional />
      <br /> */}
      <Profiler id="CounterFunc" onRender={callback}>
        <CounterFunc />
      </Profiler>
      <br />
      <Profiler id="CounterFuncOptimised" onRender={callback}>
        <CounterFuncOptimised />
      </Profiler>
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

export default App;
