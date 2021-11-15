import React from "react";
import { Form, Input } from "antd";
import styles from "./SignUpInput.module.css";

const SignUpInput = ({
  type,
  label,
  placeholder,
  rules,
  name,
  onChange,
  onKeyUp,
  noStyle = false
}) => {
  return (
    <Form.Item
      required={false}
      className={styles.signUpInputLabel}
      label={label}
      name={name}
      rules={rules || []}
      noStyle={noStyle}
    >
      {type == "password" ? (
        <Input.Password
          onKeyUp={(e) => {
            onKeyUp && onKeyUp(e);
          }}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          placeholder={placeholder}
          className={styles.signUpPasswordInput}
        />
      ) : (
        <Input
          placeholder={placeholder}
          className={styles.signUpInput}
          onKeyUp={(e) => {
            onKeyUp && onKeyUp(e);
          }}
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      )}
    </Form.Item>
  );
};

export default SignUpInput;
