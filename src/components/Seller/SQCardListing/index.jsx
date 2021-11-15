import React from "react";
import "./SQCardListing.css";
import BsThreeDots from "../../../dist/img/Seller/3dotsHorizontal.png";
import Modal from "../SQModal";

const SQCardListing = (props) => {
  const [visible, setVisible] = React.useState(false);

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="sqContainer">
      <div className="sqCard">
        <div className="up">
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
          <div className="middle">
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
          <div className="right">
            <img src={BsThreeDots} style={{ marginTop: "-1rem" }} />
            <button onClick={openModal} className="applyBtn">
              Apply
            </button>
          </div>
        </div>
        <div className="down">
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
      <Modal visible={visible} closeModal={closeModal} />
    </div>
  );
};

export default SQCardListing;
