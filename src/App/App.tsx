/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Profiler, useState } from "react";
import PassObjectProps from "testComponents/PassObjectProps";
import TimerClass from "testComponents/TimerClass";
import TimerFunctional from "testComponents/TimerFunctional";
import CounterClassBind from "testComponents/CounterClassBind";
import CounterClass from "testComponents/CounterClass";
import CounterFunc from "testComponents/CounterFunc";
import CounterFuncOptimised from "testComponents/CounterFuncOptimised";
import PassMemoObjectProps from "testComponents/PassMemoObjectProps";
import Tabs from "components/Tabs";
import { profilerCallback } from "helpers";
import TestContextOptimised from "testComponents/TestContextOptimised";
import TestContext from "testComponents/TestContext";
import TestContextSeparated from "testComponents/TestContextSeparated";
import StupidIncrement from "testComponents/StupidIncrement";

// const tabs = [
//   TestContextOptimised,
//   TestContext,
//   CounterFunc,
//   CounterFuncOptimised,
//   CounterClass,
//   CounterClassBind,
//   PassObjectProps,
//   PassMemoObjectProps,
//   TimerClass,
//   TimerFunctional,
// ];

// const tabsNames = tabs.map(({ name }) => name);

function App() {
  // const [currentTabIndex, setCurrentTabIndex] = useState(0);

  // const CurrentTab = tabs[currentTabIndex];

  return (
    <>
      <Profiler id={"StupidIncrement"} onRender={profilerCallback}>
        <StupidIncrement />
      </Profiler>
      {/* <Profiler id={"TestContextOptimised"} onRender={profilerCallback}>
        <TestContextOptimised />
      </Profiler> */}
      {/* <Profiler id={"TestContext"} onRender={profilerCallback}>
        <TestContext />
      </Profiler> */}
      {/* <Profiler id={"TestContextSeparated"} onRender={profilerCallback}>
        <TestContextSeparated />
      </Profiler> */}

      {/* <TestContext /> */}
      {/* <Tabs
        names={tabsNames}
        activeIndex={currentTabIndex}
        onSelectTab={setCurrentTabIndex}
      />
      <Profiler id={tabsNames[currentTabIndex]} onRender={profilerCallback}>
        <CurrentTab />
      </Profiler> */}
    </>
  );
}

export default App;
