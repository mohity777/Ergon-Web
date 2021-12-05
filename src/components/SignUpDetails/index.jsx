import React, { useRef } from "react";
import styles from "./SignUpDetails.module.css";
import TagsInput from "../TagsInput";
import { useForm } from "antd/lib/form/Form";
import { INDUSTRY_OPTIONS } from "../../utils/constants";
import { Button, Form } from "antd";

import { Select } from "antd";
import Uploader from "../Uploader";
import { useDispatch } from "react-redux";
import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const SignUpDetails = (props) => {
  const products = useRef([]);
  const machines = useRef([]);
  const capacity = useRef(null);
  const industry = useRef(null);
  const area = useRef(null);
  const workedWith = useRef([]);

  const history = useHistory();

  const onFinish = async () => {
    try{
         const data = {
          //  companyName: "Ergon",
          //  gstin: "sdvsdvsdbvsf",
          //  address: "fadvad",
          //  ownerName: "David",
           capacity: capacity.current,
           area: area.current,
           industry: industry.current,
           products: products.current,
           workedWith: workedWith.current,
           machines: machines.current,
         };
         console.log(data)
         const res = await Api.post(PATH.signUpDetails, data);
         history.replace('/Dashboard')
    }catch(err){}
  };

  const onSkip = () => {
    history.push('/Dashboard')
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputView}>
        <TagsInput
          placeholder="Gas Filter"
          label="Product List"
          name="products"
          onChangeTags={(tags) => {
            products.current = tags;
          }}
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
              onChangeTags={(tags) => (machines.current = tags)}
              labelClass={styles.label}
              inputClass={styles.input}
            />
          </div>
          <div className={styles.inputView}>
            <TagsInput
              single={true}
              placeholder="Fabrication"
              label="Capacity"
              name="capacity"
              onChange={(e) => {
                capacity.current = e.target.value;
              }}
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
                className={`${styles.input}`}
                onChange={(value) => {
                  industry.current = value;
                }}
                placeholder="Metal & Metal Products"
              >
                {INDUSTRY_OPTIONS.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className={styles.inputView}>
            <TagsInput
              single={true}
              placeholder="Delhi"
              label="Area/City"
              name="area"
              onChange={(e) => {
                area.current = e.target.value;
              }}
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
          onChangeTags={(tags) => {}}
          labelClass={styles.label}
          inputClass={styles.input}
        />
      </div>
      <div className={styles.inputView}>
        <TagsInput
          placeholder="Tata Motars"
          label="Worked with"
          name="workedWith"
          onChangeTags={(tags) => {
            workedWith.current = tags;
          }}
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
        <Button htmlType="submit" className={styles.btn} onClick={onFinish}>
          Update
        </Button>
      </Form.Item>
      <Form.Item noStyle>
        <Button htmlType="submit" className={styles.btn} onClick={onSkip}>
          Skip
        </Button>
      </Form.Item>
    </div>
  );
};

export default SignUpDetails;
