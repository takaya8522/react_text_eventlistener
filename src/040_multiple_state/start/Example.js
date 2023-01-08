import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンを{countA}回押しました！</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countAボタン
      </button>

      <p>ボタンを{countB}回押しました！</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        countBボタン
      </button>

      <p>ボタンを{countC}回押しました！</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        countCボタン
      </button>
    </>
  );
};

export default Example;
