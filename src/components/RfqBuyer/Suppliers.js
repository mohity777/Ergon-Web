
import './Buyer.css'
import { Link } from 'react-router-dom';


import ModalKeep from '../Modals/ModalKeep';
import Dots from '../ThreeDots/Dots';



function Suppliers() {
  return (
    <div className="App">
      <div className="layer"></div>

      <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
      <div className="page-flex">


        <div className="main-wrapper">



        <div className="header2" >
        <div class="sort-bar">
          <div class="sort-bar-start">
            <p className="Suppliers">Suppliers</p>
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
                My Suppliers   <span>(0)</span>
                </div>
                <div>
                 Find Suppliers <span>(0)</span>
                </div>
                <div>
                 Favourites  <span>(0)</span>
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


          <div>

            <div className="header3">
              <div className="maindiv">
                <div className="div2">
                  <img className="img1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />

                </div>

                <div className="div3">
                  <p className="service">Shree om Techno Service</p>
                  <div>
                    <p className="vendor">Vendor Id :1234</p>
                    <p className="vendor">Location: Mumbai ,Thane ,42230</p>
                    <p className="vendor">Experience : 15 Years</p>

                  </div>
                  <div className="d-flex">
                    <Link class="primary-default-btn " style={{ marginLeft: "-2.1px", marginTop: "3vmax" }} to="##">Share RFQ</Link>
                  </div>
                </div>
              </div>

              <div className="sideDiv">
                <p class="sideDivContent" style={{ fontWeight: 200 }} >Po Complete <span style={{ fontWeight: 700, marginLeft: "1vmax" }}>30</span> </p>
                <p class="sideDivContent" style={{ fontWeight: 200 }} >open Rfq <span style={{ fontWeight: 700, marginLeft: "3vmax" }}>0</span> </p>
                <p class="sideDivContent" style={{ fontWeight: 200 }} >Request rfq  <span style={{ fontWeight: 700, marginLeft: "1.5vmax" }}>15</span></p>


              </div>


            </div>
            <div className="header4">

              <div className="col downBar">
                <div className=""><p>Add to favourites</p></div>
                <div className="">
                  <p>Capabilities <span className="welding"> <td><span class="badge-active">Welding</span></td></span> <span className="welding"> <td><span class="badge-active">Forging</span></td></span> </p>
                </div>
              </div>

            </div>
          </div>
          <div class="pagination-wrapper" style={{ marginRight: "1.7vmax" }}>
            <a class="pagination-prev disabled" href="##" title="Go to previous page"><i
              data-feather="arrow-left"></i></a>
            <ul class="pagination">
              <li><a class="active" href="##">1</a></li>
              <li><a href="##">2</a></li>
              <li><a href="##">3</a></li>
              <li><a href="##">4</a></li>
              <li><a href="##">5</a></li>
              <li><a href="##">...</a></li>
              <li><a href="##">10</a></li>
            </ul>
            <a class="pagination-next" href="##" title="Go to next page"><i data-feather="arrow-right"></i></a>
          </div>











        </div>
      </div>
    </div>
    </div>
  );
}

export default Suppliers;
