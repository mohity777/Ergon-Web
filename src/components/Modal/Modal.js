import React, { useState } from 'react'
import Modal from 'react-modal'
import './Modal.css'

Modal.setAppElement('#root')
const Modale = () => {

    const [modal, setModal] = useState(false)
const openModal = async ()=>{
    setModal(true)
}

const close = async ()=>{
    setModal(false)
}

    return (
        <div>
        <a href="#/" onClick={openModal}  >Create New RFQ</a>
            <Modal isOpen={modal} onRequestClose={()=>{setModal(false)}}  
            style={
              { overlay: {background:"grey"}, content: {color:"black",width:"68vmax",height:"39vmax",marginTop:"4vmax"} }} className="sqCard">

     <div className="container" >
     <div><p className="rQuote">Request For Quote</p></div>

     <div className="my-5" style={{marginLeft:"10vmax"}}>

     <div> Rfq title  <span><input  className="inputs"  placeholder="Enter RFQ Title" /> </span><span>Budget <input  className="inputs"  placeholder="in Rs."></input></span> </div>
    

     <div className="formMargin" >Description <span><input   className="inputs"  placeholder="Describe your RequireMents" /> </span><span>Quantity <input placeholder=""></input></span> </div>
     <div className="formMargin">Category <input   className="inputs" placeholder="INR" /> <span> Sub-Category <input  className="inputs"  placeholder="INR" /></span></div>
     <div className="formMargin">Credit-Preiod <input  className="inputs"  placeholder="Note to suppliers" /></div>
     <div className="formMargin">Note <input  className="inputs"  placeholder="INR" /></div>
     
     </div>
     
     
     
     </div>
            <button onClick={close} > close</button>
            </Modal>
        </div>
    )
}

export default Modale
