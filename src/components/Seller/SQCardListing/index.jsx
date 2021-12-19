import React from "react";
import styles from "./SQCardListing.module.css";
import BsThreeDots from "../../../dist/img/Seller/3dotsHorizontal.png";
import { useHistory } from "react-router-dom";

const SQCardListing = ({ item, onApplyPressed }) => {
  const history = useHistory();

  const onPressApply = (e) => {
    e.stopPropagation();
    onApplyPressed(item);
  };

  const navigateToDetails = (e) => {
    history.push("/SQDetails");
  };

  return (
    <>
      <div
        onClick={navigateToDetails}
        className={styles.sqCard}
        style={{ height: "11rem", marginBottom: "1.5rem", cursor: "pointer" }}
      >
        <div className={styles.up}>
          <div className={styles.left}>
            <h5 style={{ fontWeight: 600, fontSize: "0.85rem" }}>
              {item?.title}
            </h5>
            <h5 className={styles.rfqId}>RFQ ID: {item?.id}</h5>
            <div className={styles.boxRow}>
              <div className={styles.cardBox}>
                <h5 className={styles.boxLabel}>Budget</h5>
                <h5 className={styles.boxValue}>Rs. {item?.budget}</h5>
              </div>
              <div className={styles.cardBox} style={{ marginRight: 0 }}>
                <h5 className={styles.boxLabel}>Qty</h5>
                <h5 className={styles.boxValue}>{item.qty} Tons</h5>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Company Name</h5>
              <h5 className={styles.rowValue}>{item?.company?.companyName}</h5>
            </div>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Delivery Location</h5>
              <h5 className={styles.rowValue}>{item?.deliveryLocation}</h5>
            </div>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Credit Period</h5>
              <h5 className={styles.rowValue}>{item?.creditPeriod} Days</h5>
            </div>
          </div>
          <div className={styles.right}>
            <img src={BsThreeDots} style={{ marginTop: "-1rem" }} />
            <button onClick={onPressApply} className={styles.applyBtn}>
              Apply
            </button>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.downLeft}>
            <h5 className={styles.downLabel}>Category</h5>
            <h5 className={styles.downValue}>{item?.category}</h5>
            <h5 className={styles.downLabel}>Sub Category</h5>
            <h5 className={styles.downValue}>{item?.subCategory}</h5>
          </div>
          <div className={styles.downRight}>
            <h5 className={styles.downLabel}>Created on</h5>
            <h5 className={styles.downValue}>{item?.createdDate}</h5>
            <h5 className={styles.downLabel}>Last Date to apply</h5>
            <h5 className={styles.downValue}>{item?.applicationCloseTime}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SQCardListing;
