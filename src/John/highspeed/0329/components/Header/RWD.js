import React, { useState } from "react";
import "./index.css";
import ClockLogo from "./ClockLogo";
import Head from "./HeadLogo";
import Menu from "../../Images/menu.svg";
import Btn from "./Btn";

const RWD = () => {
  const [API, setAPI] = useState(true);

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
            相關資料
            <img onClick={RwdOut} src={Menu} />
          </div>

          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="/index.html"
          >
            HOME
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://www.thsrc.com.tw/"
          >
            OFFCIAL
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_Station"
          >
            API1
          </a>
          <a
            className="box224 linkSize box2Btn"
            target="_blank"
            href="https://ptx.transportdata.tw/MOTC?t=Rail&v=2#!/THSR/THSRApi_ODDailyTimetable"
          >
            API2
          </a>
        </div>
      </div>
    </>
  );
};

export default RWD;
