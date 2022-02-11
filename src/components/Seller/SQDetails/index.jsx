import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "../../../utils/api";
import { PATH } from "../../../utils/apiPath";
import { notifySuccess } from "../../../utils/functions";
import ButtonWithLoader from "../../ButtonWithLoader";
import DropdownPicker from "../../DropdownPicker";
import ImageView from "../../ImageViewer";
import style from "../SQCardListing/SQCardListing.module.css";
import SQDashboard from "../SQDashboard";
import styles from "./SQDetails.module.css";

const SQDetails = () => {

  const location = useLocation();

  const [item, setItem] = useState(location.state.data);
  const rfqDetails = item?.rfqDetails;
  const cameFrom = location.state.cameFrom;

  const workStatus = useRef('');

  const onSubmitStatus = async () => {
    try{
      const body = {
        sqID: item?.id,
        workStatus: workStatus.current
      }
      const res = await Api.post(PATH.updateWorkStatus, body);
      setItem(res?.data || {});
      notifySuccess('Work Status Successfully Updated')
    }catch(err){}
  }

  return (
    <SQDashboard headline={`SQ/${rfqDetails?.title}`}>
      <div className={`${style.sqCard} ${styles.sqCardDetails}`}>
        <div className={`${style.up} ${styles.sqCardDetailsTop}`}>
          <div className={style.left}>
            <h5 style={{ fontWeight: 600, fontSize: "0.85rem" }}>
              {rfqDetails?.title}
            </h5>
            <h5 className={style.rfqId}>RFQ ID: {rfqDetails?.id}</h5>
            <div className={style.boxRow}>
              <div className={style.cardBox}>
                <h5 className={style.boxLabel}>Budget</h5>
                <h5 className={style.boxValue}>Rs. {rfqDetails?.budget}</h5>
              </div>
              <div className={style.cardBox} style={{ marginRight: 0 }}>
                <h5 className={style.boxLabel}>Qty</h5>
                <h5 className={style.boxValue}>{rfqDetails?.qty}</h5>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <button className={`${style.applyBtn} ${styles.payDueBtn}`}>
              Pay due in {item?.timeRequired} Days
            </button>
          </div>
        </div>
        <div className={`${style.middle} ${styles.sqCardDetailsMiddle}`}>
          <div className={styles.poDesign}>
            <div className={styles.poDesignRow}>
              <h5 className={styles.poDesignText}>PO</h5>
              <ImageView
                src={item?.po}
                style={{ width: "2.1rem", height: "2.1rem", cursor: "pointer" }}
              />
            </div>
            <div className={styles.poDesignRow}>
              <h5 className={styles.poDesignText}>Design</h5>
              <ImageView
                src={rfqDetails?.design}
                style={{ width: "2.1rem", height: "2.1rem", cursor: "pointer" }}
              />
            </div>
          </div>
          <div
            className={styles.poDesignRow}
            style={{ width: "fit-content", marginTop: 0 }}
          >
            <h5 className={styles.poDesignText}>Status</h5>
            {(cameFrom == "RFQ") || (item?.work_status == "COMPLETED") || (!item?.po) ? (
              <DropdownPicker
                onChange={() => {}}
                labelExactractor="label"
                valueExtractor="value"
                placeholder={item?.work_status}
                disabled={true}
                showArrow={false}
                className={styles.disabled}
              />
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <input
                  placeholder={item?.work_status || "status"}
                  onChange={(e) => {
                    workStatus.current = e.target.value;
                  }}
                  className={styles.status}
                />
                <ButtonWithLoader
                  btnStyle={{
                    backgroundColor: "var(--primary)",
                    color: "white",
                    fontSize: "0.65rem",
                    width: "4.5rem",
                    marginLeft: 10,
                    borderRadius: 5,
                  }}
                  text="Submit"
                  onClick={onSubmitStatus}
                />
              </div>
            )}
          </div>
          <div className={style.middle} style={{ alignSelf: "flex-end" }}>
            <div className={style.middleRow}>
              <h5 className={style.rowLabel}>Company Name</h5>
              <h5 className={style.rowValue}>
                {cameFrom == "RFQ"
                  ? item?.company?.companyName
                  : rfqDetails?.company?.companyName}
              </h5>
            </div>
            <div className={style.middleRow}>
              <h5 className={style.rowLabel}>Delivery Location</h5>
              <h5 className={style.rowValue}>{rfqDetails?.deliveryLocation}</h5>
            </div>
            <div className={style.middleRow}>
              <h5 className={style.rowLabel}>Credit Period</h5>
              <h5 className={style.rowValue}>
                {rfqDetails?.creditPeriod} Days
              </h5>
            </div>
          </div>
        </div>
        <div className={`${style.down} ${styles.sqCardDetailsBottom}`}>
          <div className={style.downLeft}>
            <h5 className={style.downLabel}>Category</h5>
            <h5 className={style.downValue}>{rfqDetails?.category}</h5>
            <h5 className={style.downLabel}>Sub Category</h5>
            <h5 className={style.downValue}>{rfqDetails?.subCategory}</h5>
          </div>
          <div className={style.downRight}>
            <h5 className={style.downLabel}>Created on</h5>
            <h5 className={style.downValue}>{rfqDetails?.createdDate}</h5>
            <h5 className={style.downLabel}>Last Date to apply</h5>
            <h5 className={style.downValue}>
              {rfqDetails?.applicationCloseTime}
            </h5>
          </div>
        </div>
      </div>
    </SQDashboard>
  );
};

export default SQDetails;
