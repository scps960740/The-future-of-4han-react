import React, { useState, useEffect } from "react";
import "./index.css";
import { STATION_API } from "../../global/constant";

const Selector = ({ tool }) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [allStation, setAllStation] = useState([]);

  // 重點 call api
  useEffect(() => {
    fetch(STATION_API)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const newdata = data.map((item) => {
          return {
            StationName: item.StationName.Zh_tw,
            StationID: item.StationID,
          };
        });
        setAllStation(newdata);
      });
  }, []);

  function dateEvent(e) {
    setDate(e.target.value);
  }
  function startEvent(e) {
    setStart(e.target.value);
  }

  function endEvent(e) {
    setEnd(e.target.value);
  }

  function searchEvent() {
    if (date === "") {
      window.alert("請輸入日期");
      return;
    }
    if (start === "") {
      window.alert("請輸入起程站");
      return;
    }
    if (end === "") {
      window.alert("請輸入終點站");
      return;
    }
    tool({
      mainDate: date,
      mainStart: start,
      mainEnd: end,
    });
  }

  return (
    <>
      <input className="box211" type="date" value={date} onChange={dateEvent} />
      <div className="box211">
        <select value={start} onChange={startEvent}>
          <option value="">選擇啟程站</option>
          {allStation.map((item) => {
            return (
              <option key={item.StationID} value={item.StationID}>
                起始站 : &nbsp;
                {item.StationName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="box211">
        <select value={end} onChange={endEvent}>
          <option value="">選擇終點站</option>
          {allStation.map((item) => {
            return (
              <option key={item.StationID} value={item.StationID}>
                終點站 : &nbsp;
                {item.StationName}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <button className="buttonStation" onClick={searchEvent}>
          搜尋
        </button>
      </div>
    </>
  );
};

export default Selector;
