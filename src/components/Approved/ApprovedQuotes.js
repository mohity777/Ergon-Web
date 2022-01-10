import React from 'react'


// import '../RfqBuyer/Buyer.css'
import styleApp from './Approved.module.css'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination'
import SQDashboard from '../Seller/SQDashboard';

const ApprovedQuotes = (props) => {
  return (
    <SQDashboard rfqs="RFQ" fabricationScrew="Fabrication Screw" allquotes="All Quotes" approvedquotes="Approved Quotes" receivednda="Received NDA" rfqdetail="RFQ Detail">
    <div className="App">
      <div className="layer"></div>

  {/*<Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>*/}
      <div className="page-flex">
      
        <div className="main-wrapper">

      

         


          <div>
            <div className={styleApp.header5} style={{ justifyContent: "space-evenly", alignSelf: "center" }}>


              <div style={{alignSelf:"center"}}>Suppliers</div>
              <div className={styleApp.amount}>
                <span>Quote Amount</span>
                <span>Deleviery time</span>
                <span>Status</span>
              </div>


            </div>

            <div className={styleApp.header3} style={{ justifyContent: "space-evenly", alignSelf: "center" }}>
              <div className={styleApp.maindiv}>
                <div className={styleApp.div2} style={{ marginLeft: "-161px" }}>
                  <img className={styleApp.img1} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />

                </div>

                <div className={styleApp.div3}>
                  <p className={styleApp.service}>Shree om Techno Service</p>
                  <div>
                    <p className={styleApp.vendor}>Vendor Id :1234</p>
                    <p className={styleApp.vendor}>Location: Mumbai ,Thane ,42230</p>
                    <p className={styleApp.vendor}>Experience : 15 Years</p>

                  </div>


                </div>
                
                <div className={styleApp.amount} style={{ marginBottom: "119px" }}>
                  <span>Rs 25,000,000,00</span>
                  <span>   48 Days</span>
                  <span><td><span class="badge-active">New</span></td></span>
                </div>


              </div>




            </div>
            <div className={styleApp.buttons} style={{marginTop:"-8vmax",marginLeft:"64vmax"}}>
            <Link class={`${styleApp.primary_default_btn} ${styleApp.sideRfq}`} to="##"><i data-feather="plus"></i>Upload PO</Link>
         
            </div>
          </div>







<div ><Pagination/>
</div>

        
        </div>
      </div>
    </div>
    </SQDashboard>
  )
}

export default ApprovedQuotes
