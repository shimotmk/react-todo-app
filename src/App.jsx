import React, { useEffect, useState } from "react";
import { ColoufulMessage } from "./components/ColoufulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onCLickSwitchfaceShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //numに変更が起きた時のみ再び実行される
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoufulMessage color="blue">お元気ですか</ColoufulMessage>
      <ColoufulMessage color="pink">いいい</ColoufulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onCLickSwitchfaceShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>👍</p>}
    </>
  );
};
//他のファイルでも使えるようにexportする
export default App;
