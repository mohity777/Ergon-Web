import React, { memo } from "react";
import { DatePicker, Form, Input, InputNumber } from "antd";
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
      ) : type == "textarea" ? (
        <Input.TextArea
          rows={4}
          placeholder={placeholder}
          className={styles.textAreaInput}
          onKeyUp={(e) => {
            onKeyUp && onKeyUp(e);
          }}
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      ) : type == "number" ? (
        <InputNumber
          placeholder={placeholder}
          className={styles.numberInput}
          onKeyUp={(e) => {
            onKeyUp && onKeyUp(e);
          }}
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      ) : type == "dateTime" ? (
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
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

export default memo(SignUpInput);
