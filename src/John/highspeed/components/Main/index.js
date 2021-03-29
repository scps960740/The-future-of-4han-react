import React, { useState , useEffect } from "react";
import "./index.css";
import Menuhome from "./MenuhomeLogo";
import Menu from "./MenuLogo";
import Selector from "./Selector";
import RwdMain from "./RWD";

const Main = () => {
  const defaultsSarchOption = {
    mainDate: "",
    mainStart: "",
    mainEnd: "",
  };

  const [mainSearchOption, setMainSearchOption] = useState(defaultsSarchOption);
  useEffect(() => {
    // TODO del
    console.log("mainSearchOption", mainSearchOption);
  }, [mainSearchOption]);

  return (
    <div className="RwdMainClass">
        <RwdMain/>
    <div className="box2">
      <div className="box21">
        <Selector setMainSearchOption={setMainSearchOption} />
      </div>  
      <div className="box23">
        <div className="box232">
          <Menuhome />
        </div>
        <div className="box231">
          <Menu />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main;
