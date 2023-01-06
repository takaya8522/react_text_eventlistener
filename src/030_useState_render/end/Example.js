import { useState } from "react";

// POINT stateとレンダリングの仕組み
const Example = () => {
  let displayVal;
  let [ val, setVal ] = useState();
  // console.log('再レンダリングされました');
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          // setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
    </>
  );
};

export default Example;
