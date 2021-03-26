import React, { useState, useEffect } from "react";
import { STATION_API } from '../../global/constant'

const Selector = ({ setMainSearchOption }) => {

  const [date, setDate] = useState("")
  const [start, setStart] = useState("0990")
  const [end, setEnd] = useState("1070")

  const [allStation, setAllStation] = useState([])

  useEffect(() => {
    fetch(STATION_API)
    .then(res => {
      return res.json()
    })
    .then(data => {
      const newdata = data.map(item => {
        return { StationName: item.StationName.Zh_tw, StationID: item.StationID }
      })
      setAllStation(newdata)
    })
  }, [])

  // useEffect(function() {
  //   setMainSearchOption({
  //     mainDate: date,
  //     mainStart: start,
  //     mainEnd: end
  //   })
  // }, [date, start, end])

  function dateEvent (e) {
    setDate(e.target.value)
  }

  function startEvent (e) {
    setStart(e.target.value)
  }

  function endEvent (e) {
    setEnd(e.target.value)
  }

  function searchEvent () {
      setMainSearchOption({
        mainDate: date,
        mainStart: start,
        mainEnd: end
      })
  }

  return <div>
    <input type="date" value={date} onChange={dateEvent}/>

    <label>起始站</label>
    <select value={start} onChange={startEvent}>
      {allStation.map(item => {
        return <option key={item.StationID} value={item.StationID}>{item.StationName}</option>
      })}
    </select>

    <label>終點站</label>
    <select value={end} onChange={endEvent}>
      {allStation.map(item => {
        return <option key={item.StationID} value={item.StationID}>{item.StationName}</option>
      })}
    </select>

    <button onClick={searchEvent}>搜尋</button>
  </div>;
};

export default Selector;
