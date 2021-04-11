import React, { useEffect } from "react";

type ChildProps = {
  obj: { a: number; b: number };
};

function Child(props: ChildProps) {
  useEffect(() => {
    console.log("[PassObjectProps] Always");
  });

  // useEffect(() => {
  //   console.log("Always too");
  // }, [props]);

  // useEffect(() => {
  //   console.log("Always again");
  // }, [props.obj]);

  useEffect(() => {
    console.log("[PassObjectProps] On start");
  }, []);

  useEffect(() => {
    console.log("[PassObjectProps] On props changes");
  }, [props.obj.a, props.obj.b]);

  return (
    <div>
      {props.obj.a} {props.obj.b}
    </div>
  );
}

// export default React.memo(Child); // ! React.memo useless in this case
export default Child;
