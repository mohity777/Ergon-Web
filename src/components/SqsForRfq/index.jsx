import React, { useEffect, useState } from "react";
import styles from "./SqsForRfq.module.css"
import SQDashboard from '../Seller/SQDashboard';
import CompanyIcon from '../../dist/img/Seller/companyIcon.png';
import Api from '../../utils/api';
import { PATH } from '../../utils/apiPath';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { notifySuccess } from "../../utils/functions";
import UploadPO from "./UploadPo";

const AllOuotes = (props) => {

  const [data,setData] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(()=>{
     if(id) getSqsForRfq();
  },[])

  const getSqsForRfq = async () => {
   try{
        const res = await Api.get(PATH.getSqsForRfq, {
          params: {
            rfqID: id,
          },
        });
        setData(res?.data || []);
   }catch(err){}
  }

  const onClickApprove = async (item) => {
     try{
       const body = {
          sqID: item.id
       }
       const res = await Api.post(PATH.acceptSq,body);
       notifySuccess('SQ Successfully Approved')
     }catch(err){}
  }

  const onClickReject = async (item) => {
    try {
      const body = {
        sqID: item.id,
      };
      const res = await Api.post(PATH.rejectSq, body);
      notifySuccess("SQ Successfully Rejected");
    } catch (err) {} 
  }

  const navigateToDetails = (item) => {
     history.push({
       pathname: "/SQDetails",
       state: {
         data: item,
         cameFrom: 'RFQ'
       },
     });
   };

  return (
    <SQDashboard headline={`RFQ/${location.state.title}`}>
      <div className={styles.header}>
        <div className={styles.image} />
        <div className={styles.supplier}>Suppliers</div>
        <div className={styles.quote}>Quote Amount</div>
        <div className={styles.delivery}>Delivery Time</div>
        <div className={styles.status}>Status</div>
        <div className={styles.cta}></div>
      </div>
      {data.map((item, i) => (
        <div key={i} className={styles.card} style={{cursor: 'pointer'}} onClick={() => navigateToDetails(item)}>
          <div className={styles.image}>
            <img src={CompanyIcon} />
          </div>
          <div className={styles.supplier}>
            <p className={styles.supplierName}>{item?.company?.companyName}</p>
            <span className={styles.supplierInfo}>
              Vendor ID: {item?.company?.id}
            </span>
            <span className={styles.supplierInfo}>
              Location: {item?.company?.address}
            </span>
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
            {item?.status == "CREATED" ? (
              <>
                <button
                  className={styles.btn}
                  style={{ backgroundColor: "#4BDE97" }}
                  onClick={() => onClickApprove(item)}
                >
                  Approve
                </button>
                <button
                  className={styles.btn}
                  style={{ backgroundColor: "#F26464" }}
                  onClick={() => onClickReject(item)}
                >
                  Reject
                </button>
              </>
            ) : item?.po ? (
              <img src={item?.po} style={{ height: 50, width: 50 }}></img>
            ) : (
              <UploadPO sqID={item?.id} />
            )}
          </div>
        </div>
      ))}
    </SQDashboard>
  );
}

export default AllOuotes
