const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました。');
  }

  // const hello = () => { return 'hello react'};
  
  return (
    <>
    {/* POINT イベントハンドラの末尾に()は付けない */}
    {/* POINT onClickのCは大文字 */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {/* {hello} */}
    </>
  );
};

export default Example;
