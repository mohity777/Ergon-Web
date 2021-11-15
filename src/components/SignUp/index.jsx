import React from "react";
import styles from "./SignUp.module.css";
import { Button, Form, Input, InputNumber } from "antd";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const SignUp = (props) => {
  const [form] = Form.useForm();

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpMiddle}>
        <h5 className={styles.signUpHeading}>Maximise your Business</h5>
        <h5 className={styles.signUpHeading}>with Ergon</h5>
        <h5 className={styles.signUpSubHeadline} style={{ marginBottom: 0 }}>
          Start creating the best possible user experience for you
        </h5>
        <h5 className={styles.signUpSubHeadline} style={{ marginTop: 0 }}>
          customers
        </h5>
        <div className={styles.signUpBox}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              className={styles.signUpInputLabel}
              label="Company Name"
              name="companyName"
            >
              <Input
                placeholder="Enter your name"
                className={styles.signUpInput}
              />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  type: "integer",
                  min: 0,
                  max: 200,
                  message: "Please input a valid age.",
                },
                {
                  required: true,
                  message: "age is required",
                },
              ]}
              initialValue={8}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
