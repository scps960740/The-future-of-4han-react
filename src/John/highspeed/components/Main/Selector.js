import React, { useState , useEffect} from "react";
import "./index.css";
import { STATION_API } from "../../global/constant";

const Selector = ({ setMainSearchOption }) => {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const [allStation, setAllStation] = useState([]);

  // useEffect(() => {
  //   fetch(STATION_API)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       const newdata = data.map((item) => {
  //         return {
  //           StationName: item.StationName.Zh_tw,
  //           StationID: item.StationID,
  //         };
  //       });
  //       setAllStation(newdata);
  //     });
  // }, []);

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
    setMainSearchOption({
      mainDate: date,
      mainStart: start,
      mainEnd: end,  
    });  
    if(date === ""){
        window.alert("請輸入日期")
        return;
    } if(start === ""){
        window.alert("請輸入起程站")
        return;
    } if(end === ""){
        window.alert("請輸入終點站")
        return;
    }
  }


  return (
    <>
      <div><input
        className="box211"
        type="date"
        value={date}
        onChange={dateEvent}
      ></input></div>
      <div><select className="box211" value={start} onChange={startEvent}>
        {allStation.map((item) => {
          return (
            <option key={item.StationID} value={item.StationID}>
                起始站 : &nbsp;
              {item.StationName}
            </option>
          );
        })}
      </select></div>

      <div>
          
        <select className="box211" value={end} onChange={endEvent}>
        {allStation.map((item) => {
          return (
            <option key={item.StationID} value={item.StationID}>
                終點站 : &nbsp;
              {item.StationName}
            </option>
          );
        })}
      </select></div>

      <div><button className="buttonStation" onClick={searchEvent}>
        搜尋
      </button></div>
    </>
  );
};

export default Selector;
