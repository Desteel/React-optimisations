import React, { useEffect } from "react";

type ChildProps = {
  obj: { a: number; b: number };
};

function Child(props: ChildProps) {
  useEffect(() => {
    console.log("[PassMemoObjectProps] On props changes");
  });

  useEffect(() => {
    console.log("[PassMemoObjectProps] On props changes [props]");
  }, [props]);

  return (
    <div>
      {props.obj.a} {props.obj.b}
    </div>
  );
}

export default React.memo(Child);
