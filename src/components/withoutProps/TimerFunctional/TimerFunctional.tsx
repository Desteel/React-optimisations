import React, { useEffect, useRef, useState } from "react";

function TimerFunctional() {
  const [date, updateDate] = useState(new Date());

  const intervalIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const { current } = intervalIdRef;

    if (!current) {
      intervalIdRef.current = setInterval(() => {
        updateDate(new Date());
      }, 1000);
    }

    return () => {
      if (current) {
        clearInterval(current);
      }
    };
  }, []);

  return <div>TimerFunctional {date.toLocaleTimeString()}</div>;
}

export default TimerFunctional;
