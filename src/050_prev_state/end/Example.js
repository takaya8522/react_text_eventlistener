import { useState } from "react";

/* 
POINT stateの更新は予約される（すぐには更新されない。）
POINT 更新予定のstateの値の取得方法
*/
const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    setCount(prevstate /* 現在のstateの値 */ => {
      return prevstate + 1; /* 次のstateの値 */
    } );
    console.log(count);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button
        onClick={countUp}
      >+</button>
      <button
        onClick={countDown}
      >-</button>
    </>
  );
};

export default Example;
