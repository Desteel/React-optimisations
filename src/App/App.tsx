import React, { Profiler, useState } from "react";
import PassObjectProps from "testComponents/withProps/PassObjectProps";
import TimerClass from "testComponents/withoutProps/TimerClass";
import TimerFunctional from "testComponents/withoutProps/TimerFunctional";
import CounterClassBind from "testComponents/withProps/CounterClassBind";
import CounterClass from "testComponents/withProps/CounterClass";
import CounterFunc from "testComponents/withProps/CounterFunc";
import CounterFuncOptimised from "testComponents/withProps/CounterFuncOptimised";
import PassMemoObjectProps from "testComponents/withProps/PassMemoObjectProps";
import Tabs from "components/Tabs";
import { profilerCallback } from "helpers";

const tabs = [
  CounterFunc,
  CounterFuncOptimised,
  CounterClass,
  CounterClassBind,
  PassObjectProps,
  PassMemoObjectProps,
  TimerClass,
  TimerFunctional,
];

const tabsNames = tabs.map(({ name }) => name);

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const CurrentTab = tabs[currentTabIndex];

  return (
    <>
      <Tabs
        names={tabsNames}
        activeIndex={currentTabIndex}
        onSelectTab={setCurrentTabIndex}
      />
      <Profiler id={tabsNames[currentTabIndex]} onRender={profilerCallback}>
        <CurrentTab />
      </Profiler>
    </>
  );
}

export default App;
