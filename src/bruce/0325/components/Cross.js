import React from "react";
import cross from "../img/cross.svg";
import "../css/Global.css";

function Circle() {
  return (
    <div className="boxImg">
      <img src={cross}></img>
    </div>
  );
}

// const Circle = () => {
//   return (
//     <div className="boxImg">
//         <img src={cross}></img>
//     </div>
//   )
// }

export default Circle;
