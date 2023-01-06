
const Example = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>カウントの更新（CountUpdate）と表示（CountResult）を別のコンポーネントに分離してください。Exampleコンポーネント内で現在のカウントの値を管理するstateを一つ定義してこれまでのレクチャーで実装したようなカウンターを作成してください。</p>
      {/* このコメントアウトを外して利用！
        <CountResult title="カウント" />
        <CountUpdate /> 
      */}
    </>
  );
};
const CountResult = (/* propsを定義 */) => <h3>{/* propsのtitleとcountの値を表示 */}</h3>

const CountUpdate = (/* propsを定義 */) => {
  const countUp = () => {
    /* countに1追加 */
  };
  const countDown = () => {
    /* countから1マイナス */ 
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
