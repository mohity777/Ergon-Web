import React from "react";
// import '../RfqBuyer/Buyer.css'
import styleHeader from "./RFQ.module.css";

import ModalKeep from "../Modals/ModalKeep";
import Dots from "../ThreeDots/Dots";
import Pagination from "../Pagination/Pagination";

const RFQ = (props) => {
  return (
    <div className="App">
      <div className="layer"></div>

      <a className="skip-link sr-only" href="#skip-target">
        Skip to content
      </a>
      <div className="page-flex">
        <div className="main-wrapper">
          <div className={styleHeader.header2}>
            <div className="header2">
              <div class="sort-bar">
                <div class="sort-bar-start">
                  <p className="Suppliers">RFQ</p>
                </div>
                <div class="sort-bar-end">
                  <div class="sort-bar-start">
                    <div class="search-wrapper">
                      <i data-feather="search" aria-hidden="true"></i>
                      <input type="text" placeholder="Search" required />
                    </div>
                  </div>
                  <ModalKeep />
                  <Dots />
                </div>
                <div style={{ marginTop: "59px" }}>
                  <nav class="tab-nav">
                    <ul class="tab-menu">
                      <ul class="tab-menu">
                        <div className="d-flex">
                          <div className="sideline" style={{ display: "flex" }}>
                            <div>
                              My Suppliers <span>(0)</span>
                            </div>
                            <div>
                              Find Suppliers <span>(0)</span>
                            </div>
                            <div>
                              Favourites <span>(0)</span>
                            </div>
                          </div>
                        </div>
                      </ul>

                      <li>
                        <select
                          class="select transparent-btn"
                          style={{ marginLeft: "5.4vmax" }}
                          required
                        >
                          <option selected disabled>
                            All dates
                          </option>
                          <option value="2.03.2014">2.03.2014</option>
                          <option value="5.06.2014">5.06.2014</option>
                          <option value="2.03.2021">2.03.2021</option>
                        </select>
                      </li>
                      <li>
                        {" "}
                        <div class="select-wrapper">
                          <select
                            class="select transparent-btn"
                            style={{ marginLeft: "-27px" }}
                            required
                          >
                            <option selected disabled>
                              All categories
                            </option>
                            <option value="Wellness">Wellness</option>
                            <option value="UX-design">UX design</option>
                            <option value="Interaction">Interaction</option>
                            <option value="2.03.2021">Interaction</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <div class="select-wrapper">
                          <select class="select transparent-btn" required>
                            <option selected disabled>
                              Status
                            </option>
                            <option value="Pending">Pending</option>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </div>
                      </li>
                      <li>
                        {" "}
                        <div class="select-wrapper">
                          <button class="filter-btn select transparent-btn">
                            <i data-feather="filter" aria-hidden="true"></i>
                            <span>Filter</span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styleHeader.header3}>
              <div className={styleHeader.fdiv}>
                <div>
                  {" "}
                  <div>
                    Fabrication Screw{" "}
                    <p style={{ marginTop: "6px" }}>Rfq : 1234</p>{" "}
                  </div>{" "}
                  <div className={styleHeader.blocks}>
                    <div className={styleHeader.sideContent}>
                      <p>00</p>
                      <p className={styleHeader.line}>Quotes</p>
                    </div>
                  </div>{" "}
                  <div className={styleHeader.blocks} style={{ left: "915px" }}>
                    <div className={styleHeader.sideContent}>
                      <p>02</p>
                      <p className={styleHeader.line}>Selected</p>
                    </div>
                  </div>{" "}
                </div>

                <div className="d-flex " style={{ marginLeft: "-19px" }}>
                  <div className={styleHeader.sp}>
                    <p className={styleHeader.budget}>Budget</p>{" "}
                    <p className={styleHeader.rupees}>Rs. 50,00,000</p>{" "}
                  </div>
                  <div
                    className={styleHeader.sp}
                    style={{ marginLeft: "15px" }}
                  >
                    <p className={styleHeader.budget}>Qty</p>{" "}
                    <p className={styleHeader.rupees}>50 Tons</p>{" "}
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className={styleHeader.header4}>
              <div className="col downBar">
                <div>
                  <span className={styleHeader.category}>
                    Category Mechanical
                  </span>
                  <span
                    className={styleHeader.category}
                    style={{ marginLeft: "34px" }}
                  >
                    Sub category Fabrication
                  </span>
                </div>
                <div className="d-flex">
                  <p style={{ marginRight: "25px" }}>
                    {" "}
                    Created on{" "}
                    <span style={{ fontWeight: 900 }}>27 Oct 2021</span>{" "}
                    <span className=""></span>
                  </p>
                  <p style={{ marginRight: "25px" }}>
                    Last Date to Quote{" "}
                    <span style={{ fontWeight: 900 }}>27 Nov 2021</span>
                    <span className=""></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};
export default RFQ;
