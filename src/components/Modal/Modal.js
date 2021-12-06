import React, { useState } from 'react'
import Modal from 'react-modal'
import styleM from './Modal.module.css'
import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';
import { useDispatch } from "react-redux";
import styles from "../SignUp/SignUp.module.css";
import { createRfq } from "../../store/actions/rfqActions";
import SignUpInput from "../SignUpInput/index.jsx";

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
    const layout = {
        labelCol: { span: 10},
        wrapperCol: { span: 4 },
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

      const onFinish = async (values) => {
        try{
          alert("Hello")
          console.log(values)
             await dispatch (createRfq(values));
             
        }catch(err){
            console.log(err.message);
        }
      };
      const tailLayout = {
        wrapperCol: {
          offset: 0,
          span: 6,
        },
      };
    

    return (
        <div>
            <a href="#/" onClick={openModal}  >Create New RFQ</a>
            <Modal isOpen={modal} onRequestClose={() => { setModal(false) }}
                style={
                    { overlay: { background: "grey" }, content: { color: "black", width: "68vmax", height: "39vmax", marginTop: "4vmax", background: "White" } }} className={styleM.sqCard}>

                <div className="container" >
                    <div><p className={styleM.rQuote}>Request For Quote</p></div>

                    <div className="my-5">
                   
     
                    <Form {...layout} form={form} name="control-ref" onFinish={onFinish} validateMessages={validateMessages}>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <Form.Item
                    // style={{justifyContent:"space-evenly"}}
                      name="title"
                      label="RFQ title"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="Enter RFQ Title" /> 
                    </Form.Item>
                    <Form.Item
                      name="budget"
                      label="Budget"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="Budget" /> 
                    </Form.Item>
                    </div>

                    <div style={{display:'flex',justifyContent:"space-evenly"}}>
                    <Form.Item
                    
                      name="description"
                      label="Description"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="description" /> 
                    </Form.Item>
                    <Form.Item
                      name="qty"
                      label="Quantity"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="Quantity" /> 
                    </Form.Item>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <Form.Item
                      name="category"
                      label="Category"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="category" /> 
                    </Form.Item>
                    <Form.Item
                    // style={{marginLeft:"4.3vmax"}}
                      name="subCategory"
                      label="Sub-category"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="sub-category" /> 
                    </Form.Item>
                    </div>
                    <div style={{display:"flex"}}>
                    <Form.Item
                    style={{justifyContent:"space-evenly",marginRight:"2vmax"}}
                      name="note"
                      label="Note"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="note" /> 
                    </Form.Item>
                    <Form.Item
                    style={{marginLeft:"12vmax"}}
                      name="creditPeriod"
                      label="credit-period"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="credit-period" /> 
                    </Form.Item>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                    <Form.Item
                    
                      name="design"
                      label="design"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="credit-period" /> 
                    </Form.Item>
                    <Form.Item
                    // style={{marginLeft:"7vmax"}}
                      name="deliveryLocation"
                      label="deleviery location"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="credit-period" /> 
                    </Form.Item>
                    </div>
                    <Form.Item
                      name="applicationCloseTime"
                      label="Application Close time"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                    <input className={styleM.inputs} style={{ marginLeft: "3.6vmax" }} placeholder="credit-period" /> 
                    </Form.Item>
                   
                   
                   
                    <Form.Item {...tailLayout}>
                      <Button type="primary"   htmlType="submit">
                        Submit
                      </Button>
                     
                    </Form.Item>
                  </Form>
    

                      
                      </div>
                    </div>
                 

                
            </Modal>
        </div>
    )
}

export default Modale
