import React from "react";
import Logo from "../../Images/clock.svg";
import "./index.css";

const ClockLogo = () => {
  return (
    <div className="LogoWidth">
      <img src={Logo}></img>
    </div>
  );
};

export default ClockLogo;
