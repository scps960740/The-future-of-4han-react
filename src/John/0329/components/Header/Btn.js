import React from "react";

const Btn = ({ text, link, className, target }) => {
  return (
    <a href={link} className={className} target={target}>
      {text}
    </a>
  );
};

export default Btn;
