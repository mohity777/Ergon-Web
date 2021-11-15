import React from "react";
import "../SQCardListing/SQCardListing.css"
import "./SQCardDetails.css";
import ImgPlaceholder from "../../../dist/img/Seller/imgPlaceholder.png";
import DropdownPicker from "../../DropdownPicker";

const items = [
  { label: "Raw Material Purchased", value: 0 },
  { label: "Manufacturing Started", value: 1 },
  { label: "QA 1 Completed", value: 2 },
];

const SQCardDetails = (props) => {
  return (
    <div className="sqContainer">
      <div className="sqCard sqCardDetails">
        <div className="up sqCardDetailsTop">
          <div className="left">
            <h5>Fabrication - Screw</h5>
            <h5 className="rfqId">RFQ ID: 1234</h5>
            <div className="boxRow">
              <div className="cardBox">
                <h5 className="boxLabel">Budget</h5>
                <h5 className="boxValue">Rs. 50,00,000</h5>
              </div>
              <div className="cardBox" style={{ marginRight: 0 }}>
                <h5 className="boxLabel">Qty</h5>
                <h5 className="boxValue">50 Tons</h5>
              </div>
            </div>
          </div>
          <div className="right">
            <button className="applyBtn payDueBtn">Pay due in 45 Days</button>
          </div>
        </div>
        <div className="middle sqCardDetailsMiddle">
          <div className="poDesign">
            <div className="poDesignRow">
              <h5 className="poDesignText">PO</h5>
              <img src={ImgPlaceholder} alt="..." />
            </div>
            <div className="poDesignRow">
              <h5 className="poDesignText">Design</h5>
              <img src={ImgPlaceholder} alt="..."/>
            </div>
          </div>
          <div className="poDesignRow" style={{ width: "fit-content", marginTop: 0 }}>
            <h5 className="poDesignText">Status</h5>
            <DropdownPicker title="All Days" items={items} />
          </div>
          <div className="middle" style={{width: 'fit-content', alignSelf: 'flex-end'}}>
            <div className="middleRow">
              <h5 className="rowLabel">Company Name</h5>
              <h5 className="rowValue">Tata Motors</h5>
            </div>
            <div className="middleRow">
              <h5 className="rowLabel">Delivery Location</h5>
              <h5 className="rowValue">Pune, Baner 411045</h5>
            </div>
            <div className="middleRow">
              <h5 className="rowLabel">Credit Period</h5>
              <h5 className="rowValue">45 Days</h5>
            </div>
          </div>
        </div>
        <div className="down sqCardDetailsBottom">
          <div className="downLeft">
            <h5 className="downLabel">Category</h5>
            <h5 className="downValue">Mechanical</h5>
            <h5 className="downLabel">Sub Category</h5>
            <h5 className="downValue">Fabrication</h5>
          </div>
          <div className="downRight">
            <h5 className="downLabel">Category</h5>
            <h5 className="downValue">Mechanical</h5>
            <h5 className="downLabel">Sub Category</h5>
            <h5 className="downValue">Fabrication</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SQCardDetails;
