import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//BUYER
import ApprovedQuotes from "../components/Approved/ApprovedQuotes";
import Suppliers from "../components/RfqBuyer/Suppliers";
import RFQ from "../components/RfqBuyer/RFQ";
import AllOuotes from "../components/AllQuotes/AllOuotes";
import RfqPostDeal from "../components/PostRfq/RfqPostRfq";

//SELLER
import SQCardListing from "../components/Seller/SQCardListing";
import SQCardDetails from "../components/Seller/SQCardDetails";

const PrivateRoutes = (props) => {
  return (
    <Switch>
      <Route exact path="/Dashboard">
        <ApprovedQuotes />
      </Route>
      <Route exact path="/Suppliers">
        <Suppliers />
      </Route>
      <Route exact path="/RFQ">
        <RFQ />
      </Route>
      <Route exact path="/AllQuotes">
        <AllOuotes />
      </Route>
      <Route exact path="/RfqPostDeal">
        <RfqPostDeal />
      </Route>

      <Route exact path="/SQCardListing">
        <SQCardListing />
      </Route>
      <Route exact path="/SQCardDetails">
        <SQCardDetails />
      </Route>
      <Redirect to="/Dashboard" />
    </Switch>
  );
};

export default PrivateRoutes;
