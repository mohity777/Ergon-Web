import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyRfqs } from "../../store/actions/rfqActions";
import Loader from "../Loader";
import styles from "../Seller/SQCardListing/SQCardListing.module.css";
import SQDashboard from "../Seller/SQDashboard/index.jsx";
import styleHeader from "./RFQ.module.css";

const RFQ = (props) => {
  const dispatch = useDispatch();

  const { myRfqs } = useSelector((state) => state.rfq);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getMyRfqs())
      .then(() => setLoading(false))
      .catch((err) => setLoading(false));
  }, []);

  const history = useHistory();

  const navigateToSqsForRfq = (rfqId, title) => {
    history.push({
      pathname: `/SqsForRfq/${rfqId}`,
      state: {
        title,
      },
    });
  };

  return (
    <SQDashboard headline="RFQ">
      {loading ? (
        <Loader />
      ) : (
        myRfqs.map((rfq) => {
          return (
            <div
              onClick={() => navigateToSqsForRfq(rfq?.id, rfq?.title)}
              className={styles.sqCard}
              style={{
                height: "11rem",
                marginBottom: "1.5rem",
                cursor: "pointer",
              }}
            >
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
                      <h5 className={styles.boxValue}>{rfq.qty}</h5>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    className={styleHeader.blocks}
                    style={{ marginRight: "1rem" }}
                  >
                    <h1 className={styleHeader.quote}>{rfq?.count || "00"}</h1>
                    <h1 className={styleHeader.quote}>Quotes</h1>
                  </div>
                  <div className={styleHeader.blocks}>
                    <h1 className={styleHeader.quote}>
                      {rfq?.accepted_count || "00"}
                    </h1>
                    <h1 className={styleHeader.quote}>Selected</h1>
                  </div>
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
                  <h5 className={styles.downValue}>
                    {rfq.applicationCloseTime}
                  </h5>
                </div>
              </div>
            </div>
          );
        })
      )}
    </SQDashboard>
  );
};
export default RFQ;
