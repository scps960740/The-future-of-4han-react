import React, { useState, useEffect } from "react";
import "./index.css";
import Selector from "./Selector";

const RWDMain = () => {
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
    <div className="RWDMain">
      <Selector setMainSearchOption={setMainSearchOption} />
    </div>
  );
};
export default RWDMain;
