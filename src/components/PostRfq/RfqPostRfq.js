import React from 'react'

// import '../Dashboard/Dashboard.css'
// import '../RfqBuyer/Buyer.css'
// import stylePost from './PostRfq.module.css'
import { Link } from 'react-router-dom';

import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';
import Pagination from '../Pagination/Pagination'
import SQDashboard from '../Seller/SQDashboard';
import styles from "../Seller/SQCardListing/SQCardListing.module.css";
import BsThreeDots from "../../dist/img/Seller/3dotsHorizontal.png";
import { useHistory } from 'react-router';

const RfqPostDeal = () => {


  const history = useHistory()
  const navigateToDetails = (e) => {
    history.push('/SQDetails')
  }
  return (
    <SQDashboard rfqs="RFQ" fabricationScrew="Fabrication Screw">
    <div onClick={navigateToDetails} className={styles.sqCard} style={{ height: '11rem', marginBottom: '1.5rem', cursor: 'pointer' }}>
    <div className={styles.up}>
      <div className={styles.left}>
        <h5 style={{ fontWeight: 600, fontSize: "0.9rem" }}>
          Fabrication - Screw
        </h5>
        <h5 className={styles.rfqId}>RFQ ID: 1234</h5>
        <div className={styles.boxRow}>
          <div className={styles.cardBox}>
            <h5 className={styles.boxLabel}>Budget</h5>
            <h5 className={styles.boxValue}>Rs. 50,00,000</h5>
          </div>
         
        </div>
      </div>
     
      <div style={{marginLeft:"46vmax"}}> <Link class="primary-default-btn " style={{borderRadius:"36px",background:"#4e514d"}}  to="##"><i data-feather="plus"></i>Payment Due in 45 Days</Link>  </div>
    </div>
   
  </div>
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">
       
        <div className="main-wrapper">

         

    


        




<div className="header6" style={{marginLeft:0,marginRight:0}}>
<div style={{marginLeft:"60vmax",lineHeight:"44px",fontWeight:"700",fontSize:"1rem"}}>Request for update</div>


<div style={{marginLeft:"26px"}}>
<div>PO <span><img  className="img2" style={{marginLeft:"2.4vmax"}} src="https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?size=338&ext=jpg" alt="..."/></span></div>
<div style={{marginTop:"24px"}}>DESIGN <span><img className="img2" src="https://img.freepik.com/free-vector/illustration-data-folder-icon_53876-6329.jpg?size=338&ext=jpg" alt="..."/></span> </div>
</div>

<div>
<p className="shipped">Status <span style={{marginLeft:"2vmax"}}>Shipped</span></p>
</div>

<div className="sidename">
<p className="pspan" >Company Name <span style={{marginLeft:"27px",fontWeight:700}}>Tata Motors</span></p>
<p className="pspan">Location<span style={{marginLeft:"80px",fontWeight:700}}>Tata Motors</span></p>
<p className="pspan">Deleviery Location <span style={{marginLeft:"10px",fontWeight:700}}>Tata Motors</span></p>

</div>

</div>

<div>
<div className={styles.down}>
<div className={styles.downLeft}>
  <h5 className={styles.downLabel}>Category</h5>
  <h5 className={styles.downValue}>Mechanical</h5>
  <h5 className={styles.downLabel}>Sub Category</h5>
  <h5 className={styles.downValue}>Fabrication</h5>
</div>
<div className={styles.downRight}>
  <h5 className={styles.downLabel}>Created On</h5>
  <h5 className={styles.downValue}>27/04/19</h5>
  <h5 className={styles.downLabel}>Last Date to Quote</h5>
  <h5 className={styles.downValue}>27/05/19</h5>
</div>
</div>
</div>
<Pagination/>

         
        </div>
      </div>
    </div>
    </SQDashboard>
  )
}

export default RfqPostDeal
