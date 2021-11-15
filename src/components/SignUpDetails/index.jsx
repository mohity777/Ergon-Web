import React, { useRef } from "react";
import styles from "./SignUpDetails.module.css";
import TagsInput from "../TagsInput";
import { useForm } from "antd/lib/form/Form";
import { INDUSTRY_OPTIONS } from "../../utils/constants";
import { Button, Form } from "antd";

import { Select } from "antd";
import Uploader from "../Uploader";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const SignUpDetails = (props) => {
  const productList = useRef([]);
  const form = useForm();
  const onFinish = (values) => {};
  return (
    <div className={styles.container}>
      <div className={styles.inputView}>
        <TagsInput
          placeholder="Gas Filter"
          label="Product List"
          name="productList"
          onChangeTags={(tags) => (productList.current = tags)}
          labelClass={styles.label}
          inputClass={styles.input}
        />
      </div>
      <div>
        <div className={styles.row}>
          <div className={styles.inputView}>
            <TagsInput
              placeholder="Lathe"
              label="Machines"
              name="machines"
              onChangeTags={(tags) => (productList.current = tags)}
              labelClass={styles.label}
              inputClass={styles.input}
            />
          </div>
          <div className={styles.inputView}>
            <TagsInput
              placeholder="Fabrication"
              label="Capacities"
              name="capacities"
              onChangeTags={(tags) => (productList.current = tags)}
              labelClass={styles.label}
              inputClass={styles.input}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputView}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5 className={styles.label}>Industry</h5>
              <Select
                className={`${styles.input} ${styles.select}`}
                onChange={handleChange}
                placeholder="Metal & Metal Products"
              >
                {INDUSTRY_OPTIONS.map((item) => (
                  <Option value={item}>{item}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div className={styles.inputView}>
            <TagsInput
              placeholder="Delhi"
              label="Area/City"
              name="area"
              onChangeTags={(tags) => (productList.current = tags)}
              labelClass={styles.label}
              inputClass={styles.input}
            />
          </div>
        </div>
      </div>
      <div className={styles.inputView}>
        <TagsInput
          placeholder="ISO 9001"
          label="Certifications"
          name="certifications"
          onChangeTags={(tags) => (productList.current = tags)}
          labelClass={styles.label}
          inputClass={styles.input}
        />
      </div>
      <div className={styles.inputView}>
        <TagsInput
          placeholder="Tata Motars"
          label="Worked with"
          name="workedWith"
          onChangeTags={(tags) => (productList.current = tags)}
          labelClass={styles.label}
          inputClass={styles.input}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h5 className={styles.label} style={{ width: "15%" }}>
          Certifications/Rewards
        </h5>
        <Uploader />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h5 className={styles.label} style={{ width: "15%" }}>
          Industry Photos
        </h5>
        <Uploader />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h5 className={styles.label} style={{ width: "15%" }}>
          Industry Logo
        </h5>
        <Uploader />
      </div>
      <Form.Item noStyle>
        <Button htmlType="submit" className={styles.btn}>
          Update
        </Button>
      </Form.Item>
    </div>
  );
};

export default SignUpDetails;
