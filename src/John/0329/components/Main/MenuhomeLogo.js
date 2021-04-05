import React from "react";
import Menuhome from "../../Images/menuhome.svg";
import "./index.css";

const MenuhomeLogo = ({ tool, isCard }) => {
  function click() {
    tool(true);
  }

  return (
    <div className="buttonChange" onClick={click}>
      <img src={Menuhome} />
    </div>
  );
};

export default MenuhomeLogo;
