import React from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";

const RWD = () => {
  return (
    <div className="RWD">
      <div className="boxRWD">
        <div className="boxRWD1">
          <ClockLogo />
        </div>
        <div className="boxRWD2">John</div>
        <div className="boxRWD3">
          <Head />
        </div>
      </div>
    </div>
  );
};

export default RWD;
