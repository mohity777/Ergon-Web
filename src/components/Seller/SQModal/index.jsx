import React from "react";
import Modal from "react-modal";
import BsThreeDots from "../../../dist/img/Seller/3DotsHorizontal.png";
import "../SQCardListing/SQCardListing.css";
import "./SQModal.css";

const SQModal = ({ visible, closeModal }) => {
  
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="sqCard modalSqCard"
    >
      <div className="up">
        <div className="left">
          <h5>Fabrication - Screw</h5>
          <h5 className="rfqId">RFQ ID: 1234</h5>
          <div className="estTimeDiv">
            <div className="estTimeRow">
              <h5 className="estTimeTxt">Estimate</h5>
              <input placeholder="INR" />
            </div>
            <div className="estTimeRow">
              <h5 className="estTimeTxt">Time</h5>
              <input placeholder="Days" />
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
          <BsThreeDots />
          <button className="applyBtn">Apply</button>
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
    </Modal>
  );
};

export default SQModal;
