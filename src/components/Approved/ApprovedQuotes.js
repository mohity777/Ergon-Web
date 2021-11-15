import React from 'react'

import '../Dashboard/Dashboard.css'
// import '../RfqBuyer/Buyer.css'
import styleApp from './Approved.module.css'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Header1 from '../FirstHeader/Header1';
import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';
import Pagination from '../Pagination/Pagination'
const AllOuotes = (props) => {
  return (
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">
        <Dashboard />
        <div className="main-wrapper">

          <Header1 />

          <div className={styleApp.header2} >
            <div class="sort-bar">
              <div class="sort-bar-start">
                <p className={styleApp.Suppliers}>Fabrication Screw approved</p>
              </div>
              <div class="sort-bar-end">
                <div class="sort-bar-start">
                  <div class="search-wrapper">
                    <i data-feather="search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search" required />
                  </div>


                </div>
                <ModalKeep />
                <Dots/>
              </div>
              <div style={{ marginTop: "59px" }}>
                <nav class="tab-nav">
                  <ul class="tab-menu">

                    <ul class="tab-menu">
                      <div className="d-flex">
                        <div className={styleApp.sideline} style={{display:"flex"}}>
                          <div>
                            All Quotes <span>(0)</span>
                          </div>
                          <div>
                            Approved Quotes <span>(0)</span>
                          </div>
                          <div>
                            Received NDA
                          </div>
                          <div>
                            RFQ Details
                          </div>

                        </div>


                      </div>


                    </ul>

                    <li><select class="select transparent-btn" style={{ marginLeft: "20px" }} required>
                      <option selected disabled>All dates</option>
                      <option value="2.03.2014">2.03.2014</option>
                      <option value="5.06.2014">5.06.2014</option>
                      <option value="2.03.2021">2.03.2021</option>
                    </select></li>

                    <li> <div class="select-wrapper">
                      <select class="select transparent-btn" required>
                        <option selected disabled>Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </div></li>
                    <li> <div class="select-wrapper">
                      <button class="filter-btn select transparent-btn">
                        <i data-feather="filter" aria-hidden="true"></i>
                        <span>Filter</span>
                      </button>
                    </div></li>

                  </ul>
                </nav></div>
            </div>






          </div>


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
            <Link class="primary-default-btn sideRfq"  to="##"><i data-feather="plus"></i>Upload PO</Link>
         
            </div>
          </div>








<Pagination/>

          <footer className="footer">
            <div className="container footer--flex">
              <div className="footer-start">
                <p>
                  2021 © Elegant Dashboard -
                  <Link
                    to="elegant-dashboard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >elegant-dashboard.com </Link>
                </p>
              </div>
              <ul className="footer-end">
                <li><Link to="##">About</Link></li>
                <li><Link to="##">Support</Link></li>
                <li><Link to="##">Puchase</Link></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AllOuotes
