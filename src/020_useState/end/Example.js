import { useState } from "react";

const Example = () => {
  // POINT useStateは[ 値、変更用の関数 ]を返す
  // let valArry = useState();
  // POINT 分割代入で取得
  let [val, setVal] = useState();

  return (
    <>
      <input
        type="text"
        /* POINT 入力状態をstateで管理する標準的な書き方 */
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
