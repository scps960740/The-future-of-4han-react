import React, { useState } from 'react'
import './App.css'
import Btn1 from './Btn1'

// APP 第一層

// APP 往第二層丟兩個自己的變數，pressFunc跟a1

// Btn1 第二層 接收上一層丟的東西

// App 組件
// props -> { a1, a2 }
function App({ a1, a2 }) {

  // let num = 0
  // state
  const [num, setNum] = useState(0)
  const [name, setName] = useState("")

  function press() {
    console.log("我被按了")
    setNum(1)
    // num = 1
  }

  function namePress() {
    setName("John")
  }

  return <>
    <p className="title">按按鈕的次數：{num}</p>
    <Btn1 pressFunc={press} a1={100} />

    <p>名字：{name}</p>
    <button onClick={namePress}>按我加名字</button>

    <p>外面傳進來的變數：{a1} : {a2}</p>
  </>
}

export default App