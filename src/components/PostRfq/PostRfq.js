import React from 'react'

// import '../Dashboard/Dashboard.css'
// import '../RfqBuyer/Buyer.css'
// import stylePost from './PostRfq.module.css'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Header1 from '../FirstHeader/Header1';
import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';
import Pagination from '../Pagination/Pagination'

const PostRfq = () => {
  return (
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">
        <Dashboard />
        <div className="main-wrapper">

          <Header1 />

          <div className="header2" >
            <div class="sort-bar">
              <div class="sort-bar-start">
                <p className="Suppliers">Fabrication Screw post</p>
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
                        <div className="d-flex sideline">
                          <div>
                            Open quotes <span>(0)</span>
                          </div>
                          <div>
                            Accepted quotes <span>(0)</span>
                          </div>
                          <div>
                            Completed <span>(0)</span>
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
                      <select class="select transparent-btn" style={{ marginLeft: "-27px" }} required>
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




<div className="header6">
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

export default PostRfq