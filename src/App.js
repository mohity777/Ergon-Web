import './App.css';
import "antd/dist/antd.css";
// import SQCardDetails from "./components/Seller/SQCardDetails";
// import SQCardListing from './components/Seller/SQCardListing';



// import Dashboard from './components/Dashboard/Dashboard';

import './components/Dashboard/Dashboard.css'
import BuyerDashboard from './components/RfqBuyer/Buyer';


import Buyer2 from './components/RfqBuyer/Buyer2';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


import AllOuotes from './components/AllQuotes/AllOuotes';

import PostRfq from './components/PostRfq/PostRfq';
import ApprovedQuotes from './components/Approved/ApprovedQuotes';

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

        

          <Route exact path="/allquotes">
            <AllOuotes />
          </Route>
          <Route exact path="/postrfq">
            <PostRfq />
          </Route>
          <Route exact path="/approved">
            <ApprovedQuotes />
          </Route>


        </Switch>



      </Router>
    </div>
  );
}

export default App;
