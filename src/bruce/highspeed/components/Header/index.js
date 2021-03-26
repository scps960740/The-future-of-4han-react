import React from "react";

import Logo from "./Logo";
import Btn from "./Btn";
import Search from "./Search";
import Avator from "./Avator";

import "./index.css";

const Header = () => {
  const btnGroup = [
    {
      name: "btn1",
      linkhref: "https://www.google.com",
    },
    {
      name: "btn2",
      linkhref: "https://www.google.com",
    },
    {
      name: "btn3",
      linkhref: "https://www.google.com",
    },
    {
      name: "btn4",
      linkhref: "https://www.google.com",
    },
  ];

  return (
    <div className="header">
      <Logo />
      {btnGroup.map((item) => {
        return <Btn key={item.name} text={item.name} link={item.linkhref} />;
      })}
      <Search />
      <Avator />
    </div>
  );
};

export default Header;
