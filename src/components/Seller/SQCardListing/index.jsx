import React from "react";
import styles from "./SQCardListing.module.css";
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
    <div className={styles.sqContainer}>
      <div className={styles.sqCard}>
        <div className={styles.up}>
          <div className={styles.left}>
            <h5>Fabrication - Screw</h5>
            <h5 className={styles.rfqId}>RFQ ID: 1234</h5>
            <div className={styles.boxRow}>
              <div className={styles.cardBox}>
                <h5 className={styles.boxLabel}>Budget</h5>
                <h5 className={styles.boxValue}>Rs. 50,00,000</h5>
              </div>
              <div className={styles.cardBox} style={{ marginRight: 0 }}>
                <h5 className={styles.boxLabel}>Qty</h5>
                <h5 className={styles.boxValue}>50 Tons</h5>
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
            <button onClick={openModal} className={styles.applyBtn}>
              Apply
            </button>
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
      </div>
      <Modal visible={visible} closeModal={closeModal} />
    </div>
  );
};

export default SQCardListing;
