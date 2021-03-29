import React, { useState } from "react";
import "./index.css";
import train from "../../../Images/train.png";

const Content = () => {
  return (
    <div className="box3">
      <div className="nodata">
        <img src={train} />
      </div>
      <div className="noTittle">目前無資料</div>
    </div>
  );
};

export default Content;
