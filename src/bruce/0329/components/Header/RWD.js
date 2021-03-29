import React, { useState } from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";

const RWD = () => {
  return (
    <>
      <div className="RWD">
        <ClockLogo />
        <div className="RWDRight">
          <div className="RWDRightJohn">John</div>
          <Head />
        </div>
      </div>
    </>
  );
};

export default RWD;
