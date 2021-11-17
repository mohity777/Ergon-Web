import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//BUYER
import BuyerDashboard from "./components/RfqBuyer/Buyer";
import Buyer2 from "./components/RfqBuyer/Buyer2";
import AllOuotes from "./components/AllQuotes/AllOuotes";
import PostRfq from "./components/PostRfq/PostRfq";
import ApprovedQuotes from "./components/Approved/ApprovedQuotes";

// SELLER
import SignUp from "./components/SignUp";
import SQCardListing from "./components/Seller/SQCardListing";
import SQCardDetails from "./components/Seller/SQCardDetails";

// LOGIN/SIGNUP
import Login from "./components/Login";
import SignUpDetails from "./components/SignUpDetails";
import SideMenu from "./components/SideMenu";

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
          
          <SideMenu>
            <Route exact path="/">
              <BuyerDashboard />
            </Route>
            <Route exact path="/buyer">
              <Buyer2 />
            </Route>
            <Route exact path="/allquotes">
              <AllOuotes />
            </Route>
            <Route exact path="/postrfq">
              <PostRfq />
            </Route>
            <Route exact path="/approved">
              <ApprovedQuotes />
            </Route>
            
            <Route exact path="/SQCardListing">
              <SQCardListing />
            </Route>
            <Route exact path="/SQCardDetails">
              <SQCardDetails />
            </Route>
            <Route exact path="/SignUpDetails">
              <SignUpDetails />
            </Route>
          </SideMenu>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
