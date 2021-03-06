//import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import RaiseFund from "../pages/RaiseFund";
import FormFund from "../pages/FormFund";
import DonationDetail from "../pages/DonationDetail";
import ViewFund from "../pages/ViewFund";
import ErrorPage from "../pages/ErrorPage";

import Navbar from "../components/Navbar";

const PageRoutes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/raise-fund" exact component={RaiseFund} />
        <Route path="/form-fund" exact component={FormFund} />
        <Route path="/donation-detail/" exact component={DonationDetail} />
        <Route path="/view-fund" exact component={ViewFund} />
        <Route path="/error" component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default PageRoutes;
