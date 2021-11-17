
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







          </div>

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
  );
}

export default Suppliers;
