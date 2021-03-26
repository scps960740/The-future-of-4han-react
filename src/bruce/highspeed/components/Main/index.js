import React, { useEffect, useState } from "react";
import './index.css'

import Selector from './Selector'
import TimeTable from './TimeTable'

// styled component
const MainStyle = { 
  width: "100%", 
  backgroundColor: "#e2dbdb", 
  marginTop: "20px" 
}

const Main = () => {

  // 搜尋狀態
  const defaultsSarchOption = {
    mainDate: "",
    mainStart: "",
    mainEnd: ""
  }
  const [mainSearchOption, setMainSearchOption] = useState(defaultsSarchOption)
  useEffect(() => {
    // TODO del
    console.log('mainSearchOption', mainSearchOption)
  }, [mainSearchOption])


  return <div style={MainStyle}>
    <Selector setMainSearchOption={setMainSearchOption} />
    <TimeTable />
  </div>;
};

export default Main;

