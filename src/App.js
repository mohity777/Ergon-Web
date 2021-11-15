import BuyerDashboard from "./components/RfqBuyer/Buyer";
import Modale from "./components/Modal/Modal";
import Buyer2 from "./components/RfqBuyer/Buyer2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FabricationScrew from "./components/RfqBuyer/FabricationScrew";
import AllOuotes from "./components/AllQuotes/AllOuotes";

import SignUp from "./components/SignUp";
import SQCardListing from "./components/Seller/SQCardListing";
import SQCardDetails from "./components/Seller/SQCardDetails";
import Login from "./components/Login";
import SignUpDetails from "./components/SignUpDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <BuyerDashboard />
          </Route>
          <Route exact path="/buyer">
            <Buyer2 />
          </Route>
          <Route exact path="/Screw">
            <FabricationScrew screw="screw" />
          </Route>
          <Route exact path="/modal">
            <Modale />
          </Route>
          <Route exact path="/allquotes">
            <AllOuotes />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/SQCardListing">
            <SQCardListing />
          </Route>
          <Route exact path="/SQCardDetails">
            <SQCardDetails />
          </Route>
          <Route exact path="/SignUpDetails" >
             <SignUpDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
