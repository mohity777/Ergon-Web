import { Button, Form, Upload } from "antd";
import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import upload from "../../dist/img/Seller/upload.png";
import { createRfq } from "../../store/actions/rfqActions";
import AntdInput from "../AntdInput/index.jsx";
import styleM from "./CreateRFQModal.module.css";

const CreateRFQModal = ({ visible, closeModal }) => {

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
      await dispatch(createRfq(values));
      closeModal();
    } catch (err) {}
  };

  const getFile = (e) => {
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
                <AntdInput
                  placeholder="RFQ title"
                  name="title"
                  label="RFQ title"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <AntdInput
                  placeholder="Category"
                  name="category"
                  label="Category"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <AntdInput
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
                <AntdInput
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
                <AntdInput
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
                <AntdInput
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
                    multiple={false}
                    maxCount={1}
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
                <AntdInput
                  placeholder="Note"
                  name="note"
                  label="Note"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <AntdInput
                  placeholder="Sub-category"
                  name="subCategory"
                  label="Sub-category"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                />
                <AntdInput
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
                <AntdInput
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "var(--primary)" }}
                >
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

export default CreateRFQModal;
