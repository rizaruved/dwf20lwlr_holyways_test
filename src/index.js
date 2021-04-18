import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import Routes from "./routes/index";

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Routes />
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
