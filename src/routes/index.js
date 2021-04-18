import React from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import RaiseFund from "../pages/RaiseFund";
import FormFund from "../pages/FormFund";
import DonationDetail from "../pages/DonationDetail";
import ViewFund from "../pages/ViewFund";

-import React from 'react'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
        </Switch>
    )
}

export default Routes;
