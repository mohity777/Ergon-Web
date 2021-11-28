import React from 'react'

// import '../Dashboard/Dashboard.css'
// import '../RfqBuyer/Buyer.css'
// import stylePost from './PostRfq.module.css'
import { Link } from 'react-router-dom';

import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';
import Pagination from '../Pagination/Pagination'
import SQDashboard from '../Seller/SQDashboard';

const RfqPostDeal = () => {
  return (
    <SQDashboard>
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">
       
        <div className="main-wrapper">

         

          <div className="header2" >
           






          </div>


          <div>


            <div className="header3">

              <div className="fdiv">
                <div>
                <div className="d-flex">
                  <div>Fabrication Screw <p style={{ marginTop: "6px" }}>Rfq : 1234</p>  </div>
                  <div style={{marginLeft:"46vmax"}}> <Link class="primary-default-btn sideRfq" style={{borderRadius:"36px"}}  to="##"><i data-feather="plus"></i>Payment Due in 45 Days</Link>  </div>
                  </div>
                  <div className="blocks2">
                  
                   
                    
                  </div>
                 
                </div>

                <div className="d-flex " style={{ marginLeft: "-19px" }}>
                  <div className="sp">
                    <p className="budget">Budget</p>
                    <p className="rupees" >Rs. 50,00,000</p>
                  </div>
                  <div className="sp" style={{ marginLeft: "15px" }}>
                    <p className="budget">Qty</p>
                    <p className="rupees">50 Tons</p>
                  </div>
                  <div>
                  </div>
                </div>



              </div>




            </div>

          </div>




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


<div className="header4">

<div className="col downBar">
  <div ><span className="category">Category Mechanical</span><span className="category" style={{ marginLeft: "34px" }}>Sub category  Fabrication</span></div>
  <div className="d-flex">
    <p style={{ marginRight: "25px" }}>  Created on <span style={{fontWeight:900}}>27 Oct 2021</span> <span className="welding"></span></p>
    <p style={{ marginRight: "25px" }}>Last Date to Quote <span style={{fontWeight:900}}>27 Nov 2021</span><span className="welding"></span></p>
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
