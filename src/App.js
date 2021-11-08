import "antd/dist/antd.css";
// import Dashboard from './components/Dashboard/Dashboard';
import "./components/Dashboard/Dashboard.css";
import BuyerDashboard from "./components/RfqBuyer/Buyer";
import SQCardDetails from "./components/Seller/SQCardDetails";
// import SQCardListing from './components/Seller/SQCardListing';

function App() {
  return (
    <div>
      {/* <Dashboard/>  */}
      {/* <BuyerDashboard/> */}
      <SQCardDetails />
      {/* <SQCardListing /> */}
    </div>
  );
}

export default App;
