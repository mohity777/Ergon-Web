import React, { useState } from 'react'
import Modal from 'react-modal'
import styleM from './Modal.module.css'

Modal.setAppElement('#root')
const Modale = () => {

    const [modal, setModal] = useState(false)
    const openModal = async () => {
        setModal(true)
    }

    const close = async () => {
        setModal(false)
    }

    return (
        <div>
            <a href="#/" onClick={openModal}  >Create New RFQ</a>
            <Modal isOpen={modal} onRequestClose={() => { setModal(false) }}
                style={
                    { overlay: { background: "grey" }, content: { color: "black", width: "68vmax", height: "39vmax", marginTop: "4vmax", background: "White" } }} className={styleM.sqCard}>

                <div className="container" >
                    <div><p className={styleM.rQuote}>Request For Quote</p></div>

                    <div className="my-5" style={{ marginLeft: "10vmax" }}>

                        <div> Rfq title  <span><input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="Enter RFQ Title" /> </span><span style={{marginLeft:"4vmax"}}>Budget <input className={styleM.inputs} style={{marginLeft:"6vmax"}} placeholder="in Rs."></input></span> </div>


                        <div className={styleM.formMargin} >Description <span><input className={styleM.inputs}  placeholder="Describe your RequireMents" /> </span><span style={{marginLeft:"4vmax"}}>Quantity  <input style={{marginLeft:"5.3vmax"}} placeholder=""></input></span> </div>
                        <div className={styleM.formMargin}>Category <input className={styleM.inputs} placeholder="INR" style={{marginLeft:"2.7vmax"}} /> <span style={{marginLeft:"4vmax"}}> Sub-Category <input className={styleM.inputs} style={{ marginLeft: "2.7vmax" }} placeholder="INR" /></span></div>
                        <div className={styleM.formMargin}>Credit-Preiod <input className={styleM.inputs} style={{ marginLeft: ".6vmax" }} placeholder="Note to suppliers" /></div>
                        <div className={styleM.formMargin}>Note <input className={styleM.inputs} style={{ marginLeft: "4.6vmax" ,}} placeholder="INR" /></div>

                    </div>



                </div>

                <div className="btn btn-primary">Submit</div>
                <button onClick={close} > close</button>
            </Modal>
        </div>
    )
}

export default Modale
