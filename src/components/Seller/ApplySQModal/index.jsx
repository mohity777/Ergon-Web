import React, { useRef } from "react";
import { useEffect } from "react";
import Modal from "react-modal";
import BsThreeDots from "../../../dist/img/Seller/3dotsHorizontal.png";
import Api from "../../../utils/api";
import { PATH } from "../../../utils/apiPath";
import { notifySuccess } from "../../../utils/functions";
import styles from "../SQCardListing/SQCardListing.module.css";
import style from "./ApplySQModal.module.css";

const ApplySQModal = ({ visible, closeModal, item }) => {

  let estimate = useRef('');
  let time = useRef('');

  useEffect(()=>{
     if(!visible) {
       estimate.current = '';
       time.current = '';
     }
  },[visible])

  const onClickApply = async () => {
    try{
         const data = {
           rfq: item?.id,
           estimate: estimate.current,
           time: time.current,
           design: ''
         };
         const res = await Api.post(PATH.applySq, data);
         closeModal();
         notifySuccess('Successfully Applied')
    }catch(err){}
  }

  const onChangeEstimate = (e) => {
    estimate.current = e.target.value;
  }

  const onChangeTime = (e) => {
    time.current = e.target.value;
  }
  
  return (
    <Modal
      isOpen={visible}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={`${styles.sqCard} ${style.modalSqCard}`}
    >
      <div className={styles.up}>
        <div className={styles.left}>
          <h5 style={{ fontWeight: 600, fontSize: "1rem" }}>{item?.title}</h5>
          <h5 className={styles.rfqId}>RFQ ID: {item?.id}</h5>
          <div className={styles.estTimeDiv}>
            <div className={styles.estTimeRow}>
              <h5 className={styles.estTimeTxt}>Estimate</h5>
              <input onChange={onChangeEstimate} placeholder="INR" />
            </div>
            <div className={styles.estTimeRow}>
              <h5 className={styles.estTimeTxt}>Time</h5>
              <input onChange={onChangeTime} placeholder="Days" />
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
          <button onClick={onClickApply} className={styles.applyBtn}>
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
    </Modal>
  );
};

export default ApplySQModal;
