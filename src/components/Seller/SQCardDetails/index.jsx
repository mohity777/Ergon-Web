import React from "react";
import style from "../SQCardListing/SQCardListing.module.css";
import styles from "./SQCardDetails.module.css";
import ImgPlaceholder from "../../../dist/img/Seller/imgPlaceholder.png";
import DropdownPicker from "../../DropdownPicker";
import SQDashboard from "../SQDashboard"
import { useLocation } from "react-router-dom";
const items = [
  { label: "Raw Material Purchased", value: 0 },
  { label: "Manufacturing Started", value: 1 },
  { label: "QA 1 Completed", value: 2 },
];

const SQCardDetails = (props) => {
  const location = useLocation();

  return (
    <SQDashboard headline={`SQ/${location.state.title}`}>
        <div className={`${style.sqCard} ${styles.sqCardDetails}`}>
          <div className={`${style.up} ${styles.sqCardDetailsTop}`}>
            <div className={style.left}>
              <h5 style={{fontWeight: 600, fontSize: '0.85rem'}}>Fabrication - Screw</h5>
              <h5 className={style.rfqId}>RFQ ID: 1234</h5>
              <div className={style.boxRow}>
                <div className={style.cardBox}>
                  <h5 className={style.boxLabel}>Budget</h5>
                  <h5 className={style.boxValue}>Rs. 50,00,000</h5>
                </div>
                <div className={style.cardBox} style={{ marginRight: 0 }}>
                  <h5 className={style.boxLabel}>Qty</h5>
                  <h5 className={style.boxValue}>50 Tons</h5>
                </div>
              </div>
            </div>
            <div className={style.right}>
              <button className={`${style.applyBtn} ${styles.payDueBtn}`}>
                Pay due in 45 Days
              </button>
            </div>
          </div>
          <div className={`${style.middle} ${styles.sqCardDetailsMiddle}`}>
            <div className={styles.poDesign}>
              <div className={styles.poDesignRow}>
                <h5 className={styles.poDesignText}>PO</h5>
                <img src={ImgPlaceholder} alt="..." />
              </div>
              <div className={styles.poDesignRow}>
                <h5 className={styles.poDesignText}>Design</h5>
                <img src={ImgPlaceholder} alt="..." />
              </div>
            </div>
            <div
              className={styles.poDesignRow}
              style={{ width: "fit-content", marginTop: 0 }}
            >
              <h5 className={styles.poDesignText}>Status</h5>
              <DropdownPicker onChange={()=> {}} placeholder="All Days" items={items} label="label" value="value" />
            </div>
            <div
              className={style.middle}
              style={{ width: "fit-content", alignSelf: "flex-end" }}
            >
              <div className={style.middleRow}>
                <h5 className={style.rowLabel}>Company Name</h5>
                <h5 className={style.rowValue}>Tata Motors</h5>
              </div>
              <div className={style.middleRow}>
                <h5 className={style.rowLabel}>Delivery Location</h5>
                <h5 className={style.rowValue}>Pune, Baner 411045</h5>
              </div>
              <div className={style.middleRow}>
                <h5 className={style.rowLabel}>Credit Period</h5>
                <h5 className={style.rowValue}>45 Days</h5>
              </div>
            </div>
          </div>
          <div className={`${style.down} ${styles.sqCardDetailsBottom}`}>
            <div className={style.downLeft}>
              <h5 className={style.downLabel}>Category</h5>
              <h5 className={style.downValue}>Mechanical</h5>
              <h5 className={style.downLabel}>Sub Category</h5>
              <h5 className={style.downValue}>Fabrication</h5>
            </div>
            <div className={style.downRight}>
              <h5 className={style.downLabel}>Category</h5>
              <h5 className={style.downValue}>Mechanical</h5>
              <h5 className={style.downLabel}>Sub Category</h5>
              <h5 className={style.downValue}>Fabrication</h5>
            </div>
          </div>
        </div>
    </SQDashboard>
  );
};

export default SQCardDetails;
