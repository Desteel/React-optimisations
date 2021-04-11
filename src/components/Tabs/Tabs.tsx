import { profilerCallback } from "helpers";
import React, { Profiler } from "react";

type TabProps = {
  name: string;
  index: number;
  onSelectTab: (tabIndex: number) => void;
  isActive?: boolean;
};

type TabsProps = {
  names: string[];
  activeIndex: number;
  onSelectTab: (tabIndex: number) => void;
};

const TabsRowStyle = {
  display: "flex",
};

function Tab({ name, isActive, index, onSelectTab }: TabProps) {
  function handleSelect() {
    onSelectTab(index);
  }
  const title = isActive ? `> ${name} <` : name;

  return <button onClick={handleSelect}>{title}</button>;
}

const TabMemo = React.memo(Tab);

function Tabs({ names, activeIndex, onSelectTab }: TabsProps) {
  return (
    <Profiler id={"Tabs"} onRender={profilerCallback}>
      <div style={TabsRowStyle}>
        {names.map((name, index) => (
          <TabMemo
            key={index}
            index={index}
            name={name}
            onSelectTab={onSelectTab}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </Profiler>
  );
}

export default Tabs;
