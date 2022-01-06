import React from "react";
import styles from "./SQCardListing.module.css";
import BsThreeDots from "../../../dist/img/Seller/3dotsHorizontal.png";
import { useHistory, useLocation } from "react-router-dom";

const SQCardListing = ({ item, onApplyPressed }) => {
  const history = useHistory();
  const location = useLocation();

  const rfqDetails = new URLSearchParams(location.search).get("type") == "OPEN" ? item : item?.rfqDetails;

  const onPressApply = (e) => {
    e.stopPropagation();
    onApplyPressed(item);
  };

  const navigateToDetails = (e) => {
    history.push({
      pathname: "/SQDetails",
      state: {
        title: rfqDetails?.title,
      },
    });
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
              {rfqDetails?.title}
            </h5>
            <h5 className={styles.rfqId}>RFQ ID: {rfqDetails?.id}</h5>
            <div className={styles.boxRow}>
              <div className={styles.cardBox}>
                <h5 className={styles.boxLabel}>Budget</h5>
                <h5 className={styles.boxValue}>Rs. {rfqDetails?.budget}</h5>
              </div>
              <div className={styles.cardBox} style={{ marginRight: 0 }}>
                <h5 className={styles.boxLabel}>Qty</h5>
                <h5 className={styles.boxValue}>{rfqDetails?.qty} Tons</h5>
              </div>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Company Name</h5>
              <h5 className={styles.rowValue}>{rfqDetails?.company?.companyName}</h5>
            </div>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Delivery Location</h5>
              <h5 className={styles.rowValue}>{rfqDetails?.deliveryLocation}</h5>
            </div>
            <div className={styles.middleRow}>
              <h5 className={styles.rowLabel}>Credit Period</h5>
              <h5 className={styles.rowValue}>{rfqDetails?.creditPeriod} Days</h5>
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
            <h5 className={styles.downValue}>{rfqDetails?.category}</h5>
            <h5 className={styles.downLabel}>Sub Category</h5>
            <h5 className={styles.downValue}>{rfqDetails?.subCategory}</h5>
          </div>
          <div className={styles.downRight}>
            <h5 className={styles.downLabel}>Created on</h5>
            <h5 className={styles.downValue}>{rfqDetails?.createdDate}</h5>
            <h5 className={styles.downLabel}>Last Date to apply</h5>
            <h5 className={styles.downValue}>{rfqDetails?.applicationCloseTime}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SQCardListing;
