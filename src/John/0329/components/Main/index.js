import React, { useState, useEffect } from "react";
import "./index.css";
import Selector from "./Selector";
import Content from "./Content";
import MySwiper from "./MySwiper";

import { getTimeTableApi } from "../../global/constant";

const Main = () => {
  const defaultsSarchOption = {
    mainDate: "",
    mainStart: "",
    mainEnd: "",
  };

  const [timetableData, setTimetableData] = useState([]);

  const [isCard, setIsCard] = useState(true);
  const [mainSearchOption, setMainSearchOption] = useState(defaultsSarchOption);
  useEffect(() => {
    const { mainDate, mainStart, mainEnd } = mainSearchOption;

    if (mainDate === "" || mainStart === "" || mainEnd === "") {
      return;
    }

    const api = getTimeTableApi(mainStart, mainEnd, mainDate);
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimetableData(data);
      });
  }, [mainSearchOption]);

  return (
    <>
      <div className="top">
        <MySwiper />
        <div className="boxWrapper">
          <div className="box21">
            <Selector tool={setMainSearchOption} />
          </div>
        </div>
      </div>
      <div className="RwdMainClass">
        <div className="box2">
          <div className="boxTittle">
            <div className="boxTittlerevision">車號</div>
            <div className="boxTittlerevision">日期</div>
            <div className="boxTittlerevision">起始站</div>
            <div className="boxTittlerevision">終點站</div>
            <div className="boxTittlerevision">發車時間</div>
            <div className="boxTittlerevision">抵達時間</div>
          </div>
          {/* <div className="box23">
            <div className={isCard === true ? "menu menuBg" : "menu"}>
              <Menuhome tool={setIsCard} />
            </div>
            <div className={isCard === false ? "menu menuBg" : "menu"}>
              <Menu tool={setIsCard} />
            </div>
          </div> */}
        </div>
        <Content data={timetableData} isCard={isCard} />
      </div>
    </>
  );
};

export default Main;
