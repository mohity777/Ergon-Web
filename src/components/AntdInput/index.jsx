import { DatePicker, Form, Input, InputNumber } from "antd";
import React, { memo } from "react";
import styles from "./AntdInput.module.css";

const AntdInput = ({
  type,
  label,
  placeholder,
  rules,
  name,
  onChange,
  noStyle = false,
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
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      ) : type == "number" ? (
        <InputNumber
          placeholder={placeholder}
          className={styles.numberInput}
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
          onChange={(e) => {
            onChange && onChange(e);
          }}
        />
      )}
    </Form.Item>
  );
};

export default memo(AntdInput);
