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

Modal.setAppElement("#root");
const Modale = ({ visible, closeModal }) => {
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
      notifySuccess('RFQ creted Successfully')
    } catch (err) {}
  };

  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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
                  required={false}
                  className={styleM.formLabel}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    multiple={true}
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
              <Button type="primary" htmlType="submit">
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
