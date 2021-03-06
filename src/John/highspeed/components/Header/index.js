import React from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";
import Btn from "./Btn";
import Rwd from "./RWD";

const Header = () => {
  const btnGroup = [
    {
      name: "首頁",
      linkhref: "/index.html",
      class: "box121 box1Btn",
      target: "",
    },
    {
      name: "高鐵官方",
      linkhref: "https://www.thsrc.com.tw/",
      class: "box122 box1Btn",
      target: "_blank",
    },
    {
      name: "車站API文件",
      linkhref:
        "https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_Station",
      class: "box123 box1Btn",
      target: "_blank",
    },
    {
      name: "時間表API文件",
      linkhref:
        "https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_ODDailyTimetable",
      class: "box124 box1Btn",
      target: "_blank",
    },
  ];

  return (
    <div className="RwdDiv">
      <Rwd />
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
        {/* <div className="box13 boxBorder"></div> */}
        <div className="box14 boxBorder">
          <div className="Name">John</div>
          <Head />
        </div>
      </div>
    </div>
  );
};

export default Header;
