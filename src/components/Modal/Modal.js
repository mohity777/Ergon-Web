import React, { useState } from 'react'
import Modal from 'react-modal'
import styleM from './Modal.module.css'
import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';
import { useDispatch } from "react-redux";
import styles from "../SignUp/SignUp.module.css";
import { createRfq } from "../../store/actions/rfqActions";
import SignUpInput from "../SignUpInput/index.jsx";
import { useHistory } from 'react-router-dom'
import RfqForm from './RfqForm';

Modal.setAppElement('#root')
const Modale = () => {
    const [form] = Form.useForm();

    const dispatch = useDispatch()

  

    const [modal, setModal] = useState(false)
    const openModal = async () => {
        setModal(true)
    }

    const close = async () => {
        setModal(false)
    }



  const history = useHistory()

  const onFinish = async (values) => {
    console.log(values)
    try{
         await dispatch(createRfq(values));
        
    }catch(err){}
  };
    const layout = {
        labelCol: { span: 10},
        wrapperCol: { span: 16 },
      };
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    
      // const onFinishFailed = (errorInfo) => {
      //   console.log('Failed:', errorInfo);
      // };

    //   const onFinish = async (values) => {
    //     try{
    //       alert("Hello")
    //       console.log(values)
    //          await dispatch (createRfq(values));
             
    //     }catch(err){
    //         console.log(err.message);
    //     }
    //   };
    //   const tailLayout = {
    //     wrapperCol: {
    //       offset: 0,
    //       span: 6,
    //     },
    //   };
   
    

    return (
        <div>
            <a href="#/" onClick={openModal} >Create New RFQ</a>
            <Modal  isOpen={modal} onRequestClose={() => { setModal(false) }}
                style={
                    { overlay: { background: "grey" }, content: {overflowY:"auto", color: "black", width: "68vmax", height: "39vmax", marginTop: "4vmax", background: "White" } }} className={styleM.sqCard}>

                
                    <div><p className={styleM.rQuote}>Request For Quote</p></div>

                    


                   <RfqForm onFinish={onFinish}/>
                      
                     
                 

                
            </Modal>
        </div>
    )
}

export default Modale
