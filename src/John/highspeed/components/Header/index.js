import React from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";
import Btn from "./Btn";
import Rwd from "./RWD";

const Header = () => {
  const btnGroup = [
    {
      name: "HOME",
      linkhref: "/index.html",
      class: "box121 box1Btn",
      target: "",
    },
    {
      name: "OFFCIAL",
      linkhref: "https://www.thsrc.com.tw/",
      class: "box122 box1Btn",
      target: "_blank",
    },
    {
      name: "API1",
      linkhref:
        "https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_Station",
      class: "box123 box1Btn",
      target: "_blank",
    },
    {
      name: "API2",
      linkhref:
        "https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_ODDailyTimetable",
      class: "box124 box1Btn",
      target: "_blank",
    },
  ];

  return (
    <div className="RwdDiv">
      <Rwd/>
      <div className="box1">  
      <div className="box11 boxBorder">
        <ClockLogo />
      </div>
      <div className="box12 boxBorder">
        {btnGroup.map((item) => {
          return (
            <Btn
              key={item.name}
              text={item.name}
              link={item.linkhref}
              className={item.class}
              target={item.target}
            />
          );
        })}
      </div>
      <div className="box13 boxBorder"></div>
      <div className="box14 boxBorder">
        <div className="Name">John</div>
        <div className="box143">
          <Head />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
