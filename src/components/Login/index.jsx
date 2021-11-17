import React from "react";
import styles from "../SignUp/SignUp.module.css";
import { Button, Form, Checkbox } from "antd";
import SignUpInput from "../SignUpInput";

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

const Login = (props) => {
  const [form] = Form.useForm();

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUpMiddle}>
        <h5 className={styles.signUpHeading}>Welcome back!</h5>
        <h5
          className={styles.signUpSubHeadline}
          style={{ marginTop: "0.6rem" }}
        >
          Sign in to your account to continue
        </h5>
        <div className={styles.signUpBox}>
          <Form form={form} layout="vertical" onFinish={onFinish}>
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
            <Form.Item>
              <p style={{color: '#5887FF', fontSize: '0.85rem'}}>Forgot your password?</p>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item noStyle>
              <Button htmlType="submit" className={styles.nextBtn}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;