import React from "react";
import styles from "../SignUp/SignUp.module.css";
import { Button, Form, Checkbox } from "antd";
import SignUpInput from "../SignUpInput";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions/userActions";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values) => {
    try{
         await dispatch(login(values));
         history.replace("/Dashboard");
    }catch(err){}
  };

  const navigateToSignUp = () => {
     history.push('/SignUp')
  }

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
              <p style={{ color: "#5887FF", fontSize: "0.75rem" }}>
                Forgot your password?
              </p>
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>
                <span style={{ fontSize: "0.75rem" }}>Remember me</span>
              </Checkbox>
            </Form.Item>
            <Form.Item noStyle>
              <Button htmlType="submit" className={styles.nextBtn}>
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <p
            style={{
              color: "#5887FF",
              fontSize: "0.7rem",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            Already have account?{" "}
            <span onClick={navigateToSignUp} style={{ cursor: "pointer" }}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
