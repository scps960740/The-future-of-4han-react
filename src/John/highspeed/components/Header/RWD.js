import React, { useState } from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";
import Menu from "../../Images/menu.svg";
import Close from "../../Images/close.svg";
import Btn from "./Btn";

const RWD = () => {
  const [API, setAPI] = useState(true);

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

  function RwdSet() {
    setAPI(false);
  }

  function RwdOut() {
    setAPI(true);
  }

  return (
    <>
      <div className="RWD">
        <ClockLogo />
        <div className="RWDRight">
          <div className="RWDRightJohn">John</div>
          <Head />
          <img onClick={RwdSet} src={Menu} />
        </div>
        <div className={API === false ? "RWDLink" : "RWDLink RWDLinkPosition"}>
          <div className="RWDLinkTittle">
            <img onClick={RwdOut} src={Close} />
          </div>

          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="/index.html"
          >
            首頁
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://www.thsrc.com.tw/"
          >
            高鐵官方
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_Station"
          >
            車站API文件
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_ODDailyTimetable"
          >
            時間表API文件
          </a>
        </div>
      </div>
    </>
  );
};

export default RWD;
