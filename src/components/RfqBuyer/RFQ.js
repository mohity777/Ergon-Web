import React from 'react'
// import '../RfqBuyer/Buyer.css'
import styleHeader from './RFQ.module.css'





import ModalKeep from '../Modals/ModalKeep'
import Dots from '../ThreeDots/Dots'
import Pagination from '../Pagination/Pagination'


const RFQ = (props) => {

 


    return (
  
  
      <div className="App">
  
  
        <div className="layer"></div>
  
        <a className="skip-link sr-only" href="#skip-target">Skip to content</a>
        <div className="page-flex">
  
         
          <div className="main-wrapper">
  
      
  
         <div className={styleHeader.header2} >
       
  
       
              
            
  
  
       </div>
  
  
            <div>
  
              <div className={styleHeader.header3}>
  
                <div className={styleHeader.fdiv}>
                  <div> <div>Fabrication Screw <p style={{marginTop:"6px"}}>Rfq : 1234</p>  </div>  <div className={styleHeader.blocks}><div className={styleHeader.sideContent}><p>00</p><p className={styleHeader.line}>Quotes</p></div></div>  <div className={styleHeader.blocks} style={{ left: "915px" }}><div className={styleHeader.sideContent}><p>02</p><p className={styleHeader.line}>Selected</p></div></div> </div>
  
                  <div className="d-flex " style={{ marginLeft: "-19px" }}><div className={styleHeader.sp}><p className={styleHeader.budget}>Budget</p> <p className={styleHeader.rupees} >Rs. 50,00,000</p> </div><div className={styleHeader.sp} style={{marginLeft:"15px"}}><p className={styleHeader.budget}>Qty</p> <p className={styleHeader.rupees}>50 Tons</p> </div>
                    <div></div></div>
  
  
  
                </div>
  
  
  
  
              </div>
              <div className={styleHeader.header4}>
  
                <div className="col downBar">
                  <div ><span className={styleHeader.category}>Category Mechanical</span><span className={styleHeader.category} style={{ marginLeft: "34px" }}>Sub category  Fabrication</span></div>
                  <div className="d-flex">
                    <p style={{ marginRight: "25px" }}>  Created on <span style={{fontWeight:900}}>27 Oct 2021</span> <span className=""></span></p>
                    <p style={{ marginRight: "25px" }}>Last Date to Quote <span style={{fontWeight:900}}>27 Nov 2021</span><span className=""></span></p>
                  </div>
                </div>
  
              </div>
            </div>
  
  
  <Pagination/>
  
  
  
  
  
  
          
          </div>
        </div>
      </div>
    )
  }
export default RFQ
