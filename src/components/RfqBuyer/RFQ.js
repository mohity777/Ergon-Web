import React from "react";
// import '../RfqBuyer/Buyer.css'
import styleHeader from "./RFQ.module.css";
import BsThreeDots from "../../dist/img/Seller/3dotsHorizontal.png";
import ModalKeep from "../Modals/ModalKeep";
import Dots from "../ThreeDots/Dots";
import Pagination from "../Pagination/Pagination";
import SQDashboard from "../Seller/SQDashboard/index.jsx";
import styles from "../Seller/SQCardListing/SQCardListing.module.css";
import { useHistory } from 'react-router-dom'
import RfqForm from "../Modal/RfqForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRfq } from '../../store/actions/rfqActions'



const RFQ = (props) => {

  const dispatch = useDispatch()


  const { getrfq } = useSelector(state => state.getRfq)

  useEffect(() => {

    dispatch(getRfq())



  }, [])

  useEffect(() => {
    console.log("rfqsttae", getrfq);
  }, [getrfq])

  const history = useHistory();

  const navigateToSqsForRfq = (rfqId, title) => {
    history.push({
      pathname: `/SqsForRfq/${rfqId}`,
      state: {
        title
      }
    });
  }


  return (
    <SQDashboard headline="RFQ">
      <div className="App">
        <div className="layer"></div>

        <a className="skip-link sr-only" href="#skip-target">
          Skip to content
        </a>

        <div className="page-flex">
          <div className="main-wrapper">

          {

              getrfq?getrfq.map((rfq)=>{


              
            return  <div onClick={() => navigateToSqsForRfq(rfq?.id, rfq?.title)} className={styles.sqCard} style={{ height: '11rem', marginBottom: '1.5rem', cursor: 'pointer' }}>
                  <div className={styles.up}>
                    <div className={styles.left}>
                      <h5 style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                        {rfq.title}
                      </h5>
                      <h5 className={styles.rfqId}>RFQ ID: {rfq.id}</h5>
                      <div className={styles.boxRow}>
                        <div className={styles.cardBox}>
                          <h5 className={styles.boxLabel}>Budget</h5>
                          <h5 className={styles.boxValue}>Rs. {rfq.budget}</h5>
                        </div>
                        <div className={styles.cardBox} style={{ marginRight: 0 }}>
                          <h5 className={styles.boxLabel}>Qty</h5>
                          <h5 className={styles.boxValue}>50 {rfq.qty}</h5>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: "2vmax" }}>
                      <div className={styleHeader.blocks}>
                        <div className={styleHeader.sideContent}>
                          <p>00</p>
                          <p className={styleHeader.line}>Quotes</p>
                        </div>
                      </div>{" "}
                      <div className={styleHeader.blocks} style={{ left: "915px" }}>
                        <div className={styleHeader.sideContent}>
                          <p>02</p>
                          <p className={styleHeader.line}>Selected</p>
                        </div>
                      </div>{" "}
                    </div>

                  </div>
                  <div className={styles.down}>
                    <div className={styles.downLeft}>
                      <h5 className={styles.downLabel}>Category</h5>
                      <h5 className={styles.downValue}>{rfq.category}</h5>
                      <h5 className={styles.downLabel}>Sub Category</h5>
                      <h5 className={styles.downValue}>{rfq.subCategory}</h5>
                    </div>
                    <div className={styles.downRight}>
                      <h5 className={styles.downLabel}>Created On</h5>
                      <h5 className={styles.downValue}>{rfq.createdDate}</h5>
                      <h5 className={styles.downLabel}>Last Date to Quote</h5>
                      <h5 className={styles.downValue}>{rfq.applicationCloseTime}</h5>
                    </div>
                  </div>
                </div>
              }):"Loading..."
                
              }
              


          </div>
        </div>
      </div>
    </SQDashboard>
  );
};
export default RFQ;
