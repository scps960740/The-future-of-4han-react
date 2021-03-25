import React from "react";
import ReactDOM from "react-dom";

import AppBruce from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppBruce a1={100} a2={200} />
  </React.StrictMode>,
  document.getElementById("root")
);
