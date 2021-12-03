import React from "react";
import styles from "./SignUp.module.css";
import { Button, Form, Checkbox } from "antd";
import SignUpInput from "../SignUpInput";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/userActions";
import { useHistory } from "react-router-dom";


const SignUp = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const history = useHistory()

  const onFinish = async (values) => {
    try{
         await dispatch(signUp(values));
         history.replace("/SignUpDetails");
    }catch(err){}
  };


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
            <SignUpInput
              label="Contact Person Name"
              name="ownerName"
              placeholder="POC"
              rules={[
                {
                  required: true,
                  message: "Company Name is required",
                },
              ]}
            />
            <SignUpInput
              label="Company Name"
              name="companyName"
              placeholder="Enter comapny name"
              rules={[
                {
                  required: true,
                  message: "Company Name is required",
                },
              ]}
            />
            <SignUpInput
              label="GSTIN"
              name="gstin"
              placeholder="Enter GSTIN"
              rules={[
                {
                  required: true,
                  message: "GSTIN is required",
                },
              ]}
            />
            <SignUpInput
              label="Email"
              name="email"
              placeholder="Enter your email"
              rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            />
            <SignUpInput
              label="Address"
              name="address"
              placeholder="Enter Address"
              type="textarea"
              rules={[
                {
                  required: true,
                  message: "Address is required",
                },
              ]}
            />
            <SignUpInput
              label="Password"
              name="password"
              placeholder="Enter your Password"
              type="password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
                {
                  min: 6,
                  message: "Password should should contain atleast 6 digits",
                },
              ]}
            />
            <SignUpInput
              label="Confirmed Password"
              name="confirmedPassword"
              placeholder="Confirm your Password"
              type="password"
              rules={[
                {
                  required: true,
                  message: "Please Confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            />
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item noStyle>
              <Button htmlType="submit" className={styles.nextBtn}>
                Next
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
