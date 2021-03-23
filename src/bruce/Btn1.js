import React from 'react'

// Btn1 組件
function Btn1 ({ pressFunc, a1 }) {
  return <button onClick={pressFunc}>按我加一 {a1}</button>
}

export default Btn1