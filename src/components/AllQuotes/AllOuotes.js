import React from 'react'


// import '../RfqBuyer/Buyer.css'
import styleAll from './AllQutes.module.css'
import { Link } from 'react-router-dom';

import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';
import Pagination from '../Pagination/Pagination'

const AllOuotes = (props) => {
  return (
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">
  
        <div className="main-wrapper">

        

          <div className="header2" >
          





          </div>


          <div>
            <div className={styleAll.header5} style={{ justifyContent: "space-evenly", alignSelf: "center" }}>


              <div style={{alignSelf:"center"}}>Suppliers</div>
              <div className={styleAll.amount}>
                <span>Quote Amount</span>
                <span>Deleviery Time </span>
                <span>Status</span>
              </div>


            </div>

            <div className={styleAll.header3} style={{ justifyContent: "space-evenly", alignSelf: "center" }}>
              <div className={styleAll.maindiv}>
                <div className={styleAll.div2} style={{ marginLeft: "-161px" }}>
                  <img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />

                </div>

                <div className={styleAll.div3}>
                  <p className={styleAll.service}>Shree om Techno Service</p>
                  <div>
                    <p className={styleAll.vendor}>Vendor Id :1234</p>
                    <p className={styleAll.vendor}>Location: Mumbai ,Thane ,42230</p>
                    <p className={styleAll.vendor}>Experience : 15 Years</p>

                  </div>


                </div>
                
                <div className={styleAll.amount} style={{ marginBottom: "119px" }}>
                  <span>Rs 25,000,000,00</span>
                  <span>   48 Days</span>
                  <span><td><span class="badge-active">New</span></td></span>
                </div>


              </div>




            </div>
            <div className={styleAll.buttons}>
            <Link class="primary-default-btn sideRfq" style={{background:"#4BDE97"}} to="##"><i data-feather="plus"></i>Approve</Link>
            <Link class="primary-default-btn sideRfq" style={{background:"#F26464",marginLeft:"33px"}} to="##"><i data-feather="plus"></i>Reject</Link>
            </div>
          </div>


         <Pagination/>




       
        </div>
      </div>
    </div>
  )
}

export default AllOuotes
