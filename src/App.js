import './App.css';
import "antd/dist/antd.css";
import SQCardDetails from "./components/Seller/SQCardDetails";
// import SQCardListing from './components/Seller/SQCardListing';



// import Dashboard from './components/Dashboard/Dashboard';

import'./components/Dashboard/Dashboard.css'
import BuyerDashboard from './components/RfqBuyer/Buyer';
import Modale from './components/Modal/Modal'
import Buyer2 from './components/RfqBuyer/Buyer2';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import FabricationScrew from './components/RfqBuyer/FabricationScrew';
import { modalUnstyledClasses } from '@mui/core';
import AllOuotes from './components/AllQuotes/AllOuotes';

function App() {
  return (
    <div className="App">
   
    <Router>
     
     <Switch>
     
     <Route exact path="/">
     <BuyerDashboard/>
     </Route>
     <Route exact path="/buyer">
     <Buyer2 />
     </Route>
     <Route exact path="/Screw">
    <FabricationScrew screw="screw"/>
     </Route>
     <Route exact path="/modal">
    <Modale/>
  </Route>
     
     <Route exact path="/allquotes">
    <AllOuotes/>
  </Route>
     
     
     </Switch>
    
    
     
     </Router>
    </div>
  );
}

export default App;
