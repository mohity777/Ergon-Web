import React from "react";
import Modal from "react-modal";
import BsThreeDots from "../../../dist/img/Seller/3dotsHorizontal.png";
import styles from "../SQCardListing/SQCardListing.module.css";
import style from "./SQModal.module.css";

const SQModal = ({ visible, closeModal }) => {
  
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={`${styles.sqCard} ${style.modalSqCard}`}
    >
      <div className={styles.up}>
        <div className={styles.left}>
          <h5 style={{fontWeight: 600, fontSize: '1rem'}}>Fabrication - Screw</h5>
          <h5 className={styles.rfqId}>RFQ ID: 1234</h5>
          <div className={styles.estTimeDiv}>
            <div className={styles.estTimeRow}>
              <h5 className={styles.estTimeTxt}>Estimate</h5>
              <input placeholder="INR" />
            </div>
            <div className={styles.estTimeRow}>
              <h5 className={styles.estTimeTxt}>Time</h5>
              <input placeholder="Days" />
            </div>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.middleRow}>
            <h5 className={styles.rowLabel}>Company Name</h5>
            <h5 className={styles.rowValue}>Tata Motors</h5>
          </div>
          <div className={styles.middleRow}>
            <h5 className={styles.rowLabel}>Delivery Location</h5>
            <h5 className={styles.rowValue}>Pune, Baner 411045</h5>
          </div>
          <div className={styles.middleRow}>
            <h5 className={styles.rowLabel}>Credit Period</h5>
            <h5 className={styles.rowValue}>45 Days</h5>
          </div>
        </div>
        <div className={styles.right}>
          <img src={BsThreeDots} style={{ marginTop: "-1rem" }} />
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.downLeft}>
          <h5 className={styles.downLabel}>Category</h5>
          <h5 className={styles.downValue}>Mechanical</h5>
          <h5 className={styles.downLabel}>Sub Category</h5>
          <h5 className={styles.downValue}>Fabrication</h5>
        </div>
        <div className={styles.downRight}>
          <h5 className={styles.downLabel}>Category</h5>
          <h5 className={styles.downValue}>Mechanical</h5>
          <h5 className={styles.downLabel}>Sub Category</h5>
          <h5 className={styles.downValue}>Fabrication</h5>
        </div>
      </div>
    </Modal>
  );
};

export default SQModal;
