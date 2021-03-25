import React, { useState } from "react";
import Circle from "./components/Circle";
import Cross from "./components/Cross";

import "./App.css";

function App() {
  const [button, setButton] = useState();
  const [putInCircle, setPutInCircle] = useState();
  const [putInCross, setPutInCross] = useState();
  const [value, setValue] = useState(1);

  const [putInCircle1, setPutInCircle1] = useState();
  const [putInCross1, setPutInCross1] = useState();

  // const [arr , setArr] = useState([])
  // // [false, false, false, false, false, false, false, false, false]
  // setArr(function(prevData) {
  //     const currentData = [...prevData]
  //     currentData[0] = true
  //     return currentData
  // })
  // const [ num, setNum ] = useState(100)

  function prompt() {
    setPutInCircle("");
    setPutInCross("");
    setPutInCross1("");
    setPutInCircle1("");
    setValue(0);
  }

  function circlePutIn() {
    setPutInCircle(<Circle />);
    setValue(value + 1);
    // setValue(function(prevData) {
    //     return prevData + 1
    // })
    console.log(value, "我是V");
  }

  function crossPutIn() {
    setPutInCross(<Cross />);
    setValue(value + 1);
    console.log(value, "我是V");
  }

  function circlePutIn1() {
    setPutInCircle1(<Circle />);
    setValue(value + 1);
    console.log(value);
  }

  function crossPutIn1() {
    setPutInCross1(<Cross />);
    setValue(value + 1);
    console.log(value);
  }

  function endGame() {
    if (value === 9) {
      prompt();
      window.alert("平手，重新開始遊戲");
      return;
    }
  }

  function onCilckTime() {
    endGame();
    let s = 0;
    if (s === 1) {
      console.log("NOOOO");
      return;
    }
    if (value % 2 === 0) {
      circlePutIn();
      s = 1;
      console.log(s, "我是S");
      return;
    }
    if (value % 2 === 1) {
      crossPutIn();
      s = 1;
      console.log(s, "我是S");
      return;
    }
  }

  function onCilckTime1() {
    let s = 0;
    endGame();
    if (s === 1) {
      return;
    }
    if (value % 2 === 0) {
      circlePutIn1();
      s = 1;
      return;
    }
    if (value % 2 === 1) {
      crossPutIn1();
      s = 1;
      return;
    }
  }

  return (
    <>
      <div className="main">
        {/* <input type="text" value={num}/> */}
        <div onClick={onCilckTime} className="box box1 box2">
          {putInCircle}
          {putInCross}
        </div>
        <div onClick={onCilckTime1} className="box box1 box2 box3">
          {putInCircle1}
          {putInCross1}
        </div>
        <div className="box box1 box3">3</div>
        <div className="box box1 box2">4</div>
        <div className="box box1 box2 box3">5</div>
        <div className="box box1 box3">6</div>
        <div className="box box2">7</div>
        <div className="box box2 box3">8</div>
        <div className="box box3">9</div>
        <div className="buttonClass" onClick={prompt}>
          消除
        </div>
      </div>
    </>
  );
}

export default App;
