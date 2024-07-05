import React from "react";
import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom";
import App from "./client/App";

import "./client/index.css";

/*const helmetContext = {};*/

ReactDOM.render(
  <HelmetProvider>
    {" "}
    <App />{" "}
  </HelmetProvider>,
  document.getElementById("root")
);
