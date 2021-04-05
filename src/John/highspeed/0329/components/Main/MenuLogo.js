import React from "react";
import Menu from "../../Images/menu.svg";
import "./index.css";

const MenuLogo = ({ tool }) => {
  function click() {
    tool(false);
  }

  return (
    <div className="buttonChange" onClick={click}>
      <img src={Menu} />
    </div>
  );
};

export default MenuLogo;
