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
        <div class="sort-bar">
          <div class="sort-bar-start">
          <p style={{marginLeft:"4px",fontWeight:"700",fontSize:"1rem"}}>RFQ/</p>
            <p className="Suppliers" style={{width:"215px"}}>Fabrication-Screw</p>
          </div>
          <div class="sort-bar-end">
            <div class="sort-bar-start">
              <div class="search-wrapper">
                <i data-feather="search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" required />
              </div>


            </div>
            <ModalKeep/>
            <Dots/>
          
            
          </div>
          <div style={{marginTop:"59px"}}>
           <nav class="tab-nav">
          <ul class="tab-menu">
       
          <ul class="tab-menu">
            <div className="d-flex">
              <div className="sideline" style={{display:"flex"}}>
                <div>
                All Quotes   <span>(0)</span>
                </div>
                <div>
                Approved Quotes <span>(0)</span>
                </div>
                <div>
                 Received NDA  <span>(0)</span>
                </div>
                <div>
                 RFQ Details  <span>(0)</span>
                </div>
              
              </div>
             

            </div>


          </ul>
      
            <li><select class="select transparent-btn" style={{ marginLeft: "5.4vmax" }} required>
              <option selected disabled>All dates</option>
              <option value="2.03.2014">2.03.2014</option>
              <option value="5.06.2014">5.06.2014</option>
              <option value="2.03.2021">2.03.2021</option>
            </select></li>
            <li> <div class="select-wrapper">
              <select class="select transparent-btn" style={{marginLeft:"-27px"}} required>
                <option selected disabled>All categories</option>
                <option value="Wellness">Wellness</option>
                <option value="UX-design">UX design</option>
                <option value="Interaction">Interaction</option>
                <option value="2.03.2021">Interaction</option>
              </select>
            </div></li>
            <li> <div class="select-wrapper">
              <select class="select transparent-btn" required>
                <option selected disabled>Status</option>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
              </select>
            </div></li>
            

          </ul>
        </nav></div>
        </div>

      
             
           


      </div>


          <div>
            <div className={styleAll.header5} style={{ justifyContent: "space-evenly", alignSelf: "center",marginTop:"17px" }}>


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
                
                <div className={styleAll.amount} style={{ marginBottom: "119px",marginLeft:"5vmax" }}>
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
