import React from "react";

const Card = ({ id, date, startStation, endStation, startTime, endTime }) => {
  return (
    <div className="cardClass">
      <p className="card">{id}</p>
      <p className="card">{date}</p>
      <p className="card">{startStation}</p>
      <p className="card">{endStation}</p>
      <p className="card">{startTime}</p>
      <p className="card">{endTime}</p>
    </div>
  );
};

export default Card;
