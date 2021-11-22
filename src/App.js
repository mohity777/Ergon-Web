// COMMON
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/Dashboard/Dashboard.css";

//BUYER
import RFQ from "./components/RfqBuyer/RFQ";
import AllOuotes from "./components/AllQuotes/AllOuotes";
import RfqPostDeal from "./components/PostRfq/RfqPostRfq";
import ApprovedQuotes from "./components/Approved/ApprovedQuotes";
import Suppliers from "./components/RfqBuyer/Suppliers";

// SELLER
import SignUp from "./components/SignUp";
import SQCardListing from "./components/Seller/SQCardListing";
import SQCardDetails from "./components/Seller/SQCardDetails";

// LOGIN/SIGNUP
import Login from "./components/Login";
import SignUpDetails from "./components/SignUpDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/SignUpDetails">
            <SignUpDetails />
          </Route>

          <Layout>
            <Route exact path="/">
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
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
