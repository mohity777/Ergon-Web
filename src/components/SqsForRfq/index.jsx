import React, { useEffect, useState } from "react";
import styles from "./SqsForRfq.module.css"
import SQDashboard from '../Seller/SQDashboard';
import CompanyIcon from '../../dist/img/Seller/companyIcon.png';
import { useDispatch } from 'react-redux';
import Api from '../../utils/api';
import { PATH } from '../../utils/apiPath';
import { useParams } from "react-router-dom";

const AllOuotes = (props) => {

  const [data,setData] = useState([]);
  const { rfqID } = useParams();

  useEffect(()=>{
     if(rfqID) getSqsForRfq();
  },[])

  const getSqsForRfq = async () => {
   try{
        const res = await Api.get(PATH.getSqsForRfq, {
          params: {
            rfqID: rfqID,
          },
        });
        setData(res?.data || []);
   }catch(err){}
  }

  return (
    <SQDashboard headline={"RFQ/"}>
      <div className={styles.header}>
        <div className={styles.image} />
        <div className={styles.supplier}>Suppliers</div>
        <div className={styles.quote}>Quote Amount</div>
        <div className={styles.delivery}>Delivery Time</div>
        <div className={styles.status}>Status</div>
        <div className={styles.cta}></div>
      </div>
      {data.map((item) => (
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={CompanyIcon} />
          </div>
          <div className={styles.supplier}>
            <p className={styles.supplierName}>{item?.company?.companyName}</p>
            <span className={styles.supplierInfo}>Vendor ID: {item?.company?.id}</span>
            <span className={styles.supplierInfo}>Location: {item?.company?.address}</span>
            <span className={styles.supplierInfo}>Experience: 15</span>
          </div>
          <div className={styles.quote}>
            <p className={styles.supplierName}>Rs. {item?.estimate}</p>
          </div>
          <div className={styles.delivery}>
            <p className={styles.supplierName}>{item?.timeRequired} Days</p>
          </div>
          <div className={styles.status}>
            <p className={styles.supplierName}>{item?.status}</p>
          </div>
          <div className={styles.cta}>
            <button
              className={styles.btn}
              style={{ backgroundColor: "#4BDE97" }}
            >
              Approve
            </button>
            <button
              className={styles.btn}
              style={{ backgroundColor: "#F26464" }}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </SQDashboard>
  );
}

export default AllOuotes
