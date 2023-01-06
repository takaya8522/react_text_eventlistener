import { useState } from "react";

// POINT 配列のstateの扱い方
const Example = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5]);

  const shuffle = () => {
    const newNums = [ ...nums ];
    const lastVal = newNums.pop();
    newNums.unshift(lastVal);
    setNums(newNums);
  }
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
