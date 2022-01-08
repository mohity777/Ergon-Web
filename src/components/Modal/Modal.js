import React, { useState } from "react";
import Modal from "react-modal";
import styleM from "./Modal.module.css";
import {
  Form,
  Button,
  Upload,
} from "antd";
import { useDispatch } from "react-redux";
import { createRfq } from "../../store/actions/rfqActions";
import SignUpInput from "../SignUpInput/index.jsx";
import upload from "../../dist/img/Seller/upload.png";
import { notifySuccess } from "../../utils/functions";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";

Modal.setAppElement("#root");
const Modale = ({ visible, closeModal }) => {


const storage = getStorage()

  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState("")
const [imageurl, setImageurl] = useState("")


    const handleUpload=()=>{
     const storageTask = ref(storage,`images/ ${image.name}`);
     const uploadTask = uploadBytesResumable(storageTask,image)

     uploadTask.on(
       "state_changed",
       snapshot =>{const prog = Math.round(( snapshot.bytesTransferred / snapshot.totalBytes)*100)
      setProgress(prog)
      },
       error=>{
         console.log(error)
       },
       ()=>{
         getDownloadURL(uploadTask.snapshot.ref).then(url => {console.log(url)
          setImageurl(url)
        }
       
         )
       }
     )
      }
    















  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = async (values) => {
    try {
      console.log(values);
      dispatch(createRfq(values));
      closeModal();
    } catch (err) {}
  };

  // const getFile = (e) => {
  //   console.log("Upload event is :", e.target.files);

  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  const getFile = (e)=>{
    console.log("even is ",e.fileList[0])
    setImage(e.fileList[0])



    // const storageTask = ref(storage,`images/ ${image.name}`);
    //  const uploadTask = uploadBytesResumable(storageTask,image)

    //  uploadTask.on(
    //    "state_changed",
    //    snapshot =>{const prog = Math.round(( snapshot.bytesTransferred / snapshot.totalBytes)*100)
    //   setProgress(prog)
    //   },
    //    error=>{
    //      console.log(error)
    //    },
    //    ()=>{
    //      getDownloadURL(uploadTask.snapshot.ref).then(url => {console.log(url)
    //       setImageurl(url)
    //     }
       
    //      )
    //    }
    //  )
      }
  

  return (
    <div>
      <Modal
        isOpen={visible}
        onRequestClose={() => {
          closeModal();
        }}
        style={{
          content: {
            color: "black",
            width: "62vmax",
            height: "39vmax",
            marginTop: "4vmax",
            background: "White",
            overflowY: "scroll",
          },
        }}
        className={styleM.sqCard}
      >
        <div>
          <p className={styleM.rQuote}>Request For Quote</p>
          <Form
            form={form}
            layout="vertical"
            name="control-ref"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <div style={{ width: "35%" }}>
                <SignUpInput
                  placeholder="RFQ title"
                  name="title"
                  label="RFQ title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <SignUpInput
                  placeholder="Category"
                  name="category"
                  label="Category"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <SignUpInput
                  type="number"
                  placeholder="Budget"
                  name={["budget"]}
                  label="Budget"
                  rules={[
                    {
                      required: true,
                      message: "Budget must be a valid Integer",
                    },
                    {
                      type: "number",
                      min: 0,
                    },
                  ]}
                />
                <SignUpInput
                  type="textarea"
                  placeholder="Description"
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <SignUpInput
                  type="number"
                  placeholder="Quantity"
                  name={["qty"]}
                  label="Quantity"
                  rules={[
                    {
                      required: true,
                      message: "Quantity must be a valid Integer",
                    },
                    {
                      type: "number",
                      min: 0,
                    },
                  ]}
                />
                <SignUpInput
                  placeholder="deleviery location"
                  name="deliveryLocation"
                  label="Deleviery Location"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <Form.Item
                  placeholder="design"
                  name="design"
                  label="Design"
                  getValueFromEvent={getFile}
                  type="file"
                  required={false}
                  className={styleM.formLabel}
                  rules={[
                    {
                      // required: true,
                    },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    multiple={false}
                    beforeUpload={() => {
                      return false;
                    }}
                  >
                    <div>
                      <img src={upload} />
                    </div>
                  </Upload>
                </Form.Item>
              </div>
              <div style={{ width: "35%" }}>
                <SignUpInput
                  placeholder="Note"
                  name="note"
                  label="Note"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <SignUpInput
                  placeholder="Sub-category"
                  name="subCategory"
                  label="Sub-category"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <SignUpInput
                  type="number"
                  placeholder="credit-period"
                  name={["creditPeriod"]}
                  label="Credit-period"
                  rules={[
                    {
                      required: true,
                      message: "Credit Period must be a valid Integer",
                    },
                    {
                      type: "number",
                      min: 0,
                    },
                  ]}
                />
                <SignUpInput
                  type="dateTime"
                  name="applicationCloseTime"
                  label="Application Close time"
                  placeholder="Application Close time"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Form.Item>
              <Button type="primary" onClick={handleUpload} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Modale;
