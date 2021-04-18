import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import PageRoutes from "./routes/index";

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <PageRoutes />
    </Router>
  </BrowserRouter>,
  document.getElementById("root")
);
