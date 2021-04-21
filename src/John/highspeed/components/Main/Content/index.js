import React, { useState, useEffect } from "react";
import "./index.css";
import train from "../../../Images/train.png";
import rightArrow from "../../../Images/rightArrow.svg";
import Card from "./Card";
import { chunk } from "lodash";

const Content = ({ data, isCard }) => {
  const [newdata, setNewData] = useState(data);
  useEffect(() => {
    const chunkedData = chunk(data, 5);
    setNewData(chunkedData);
  }, [data]);

  const [page, setPage] = useState(0);

  function renderContent() {
    if (newdata.length === 0) {
      return (
        <div className="box3">
          <div className="nodata">
            <img src={train} />
          </div>
          <div className="noTittle">目前無資料</div>
        </div>
      );
    } else {
      // [ [5] , [5] , [5], [5] , [5], [5]]
      // return newdata.map((group) => {
      // return group.map(item => {
      //   return <Card key={item.DailyTrainInfo.TrainNo} date={item.DailyTrainInfo.TrainNo}/>
      // })
      // })

      // [ [1, 2, 3] ] = newdata
      // [1,2,3] = newdata[0]

      // [] = newdata
      // undefiend = newdata[0]
      return newdata[page].map((item) => {
        return (
          <div>
            <Card
              key={item.DailyTrainInfo.TrainNo}
              id={item.DailyTrainInfo.TrainNo}
              date={item.TrainDate}
              startStation={item.OriginStopTime.StationName.Zh_tw}
              endStation={item.DestinationStopTime.StationName.Zh_tw}
              startTime={item.OriginStopTime.ArrivalTime}
              endTime={item.DestinationStopTime.ArrivalTime}
            />
          </div>
        );
      });
    }
  }

  function prev() {
    if (page === 0) {
      return;
    }
    // setPage(page - 1) 錯誤寫法
    setPage(function (prevPage) {
      return prevPage - 1;
    });
  }

  function next() {
    if (page === newdata.length - 1) {
      return;
    }
    // setPage(page + 1) 錯誤寫法
    setPage(function (prevPage) {
      return prevPage + 1;
    });
  }

  return (
    <>
      {/* {data.length === 0 ? (
        <div className="box3">
          <div className="nodata">
            <img src={train} />
          </div>
          <div className="noTittle">目前無資料</div>
        </div>
      ) : (
        data.map((item) => {
          return <Card key={item.DailyTrainInfo.TrainNo} date={item.DailyTrainInfo.TrainNo}/>
        })
      )} */}
      {renderContent()}
      {newdata.length !== 0 && <div className="page">
        <button className="pageButton pageButtonLeft" onClick={prev}>
        <img src={rightArrow} />
          較早班次 
        </button>
        <button className="pageButton pageButtonRight" onClick={next}>
          較晚班次
          <img src={rightArrow} />
        </button>
        {/* <p>第{page + 1}頁</p> */}
      </div>}
    </>
  );
};

export default Content;
