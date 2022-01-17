import React, { useRef } from "react";
import styles from "./SignUpDetails.module.css";
import TagsInput from "../TagsInput";
import { INDUSTRY_OPTIONS } from "../../utils/constants";
import { Button, Form } from "antd";

import { Select } from "antd";
import Uploader from "../Uploader";
import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import { setGlobalLoader } from "../../store/actions/globalLoaderActions";
import { notifyError } from "../../utils/functions";

const { Option } = Select;

const SignUpDetails = (props) => {
  const products = useRef([]);
  const machines = useRef([]);
  const capacity = useRef(null);
  const industry = useRef(null);
  const area = useRef(null);
  const workedWith = useRef([]);
  const capabilities = useRef([]);
  
  const certificatesRewards = useRef([]);
  const industryPhotos = useRef([]);
  const industryLogo = useRef([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const uploadToFirebase = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `Erogon_Images/${file.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file, "data_url");  
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  }

  const onFinish = async () => {
    try{
         dispatch(setGlobalLoader(true));
         const res =  await Promise.all([
           Promise.all(certificatesRewards.current.map(async it => {
              const url = await uploadToFirebase(it?.originFileObj);
              return url;
           })),
           Promise.all(industryPhotos.current.map(async it => {
             const url = await uploadToFirebase(it?.originFileObj);
             return url;
           })),
           Promise.all(industryLogo.current.map(async it =>{ 
             const url = await uploadToFirebase(it?.originFileObj);
             return url;
           }))
         ]);
         const data = {
           companyName: user?.company?.companyName,
           gstin: user?.company?.gstin,
           address: user?.company?.address,
           ownerName: user?.company?.ownerName,
           capacity: capacity.current,
           capability: capabilities.current,
           area: area.current,
           industry: industry.current,
           products: products.current,
           workedWith: workedWith.current,
           machines: machines.current,
           certificatesRewards: res[0],
           industryPhotos: res[1],
           industryLogo: res[2]
         };
         console.log(data)
         await Api.post(PATH.signUpDetails, data);
         dispatch(setGlobalLoader(false));
         history.replace('/Dashboard')
    }catch(err){
         dispatch(setGlobalLoader(false));
         notifyError(err?.message || 'Something Went Wrong!!');
    }
  };

  const onSkip = () => {
    history.push('/Dashboard')
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
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
        <div className={styles.inputView}>
          <TagsInput
            placeholder="Capabilities"
            label="Capabilities"
            name="capabilities"
            onChangeTags={(tags) => {
              capabilities.current = tags;
            }}
            labelClass={styles.label}
            inputClass={styles.input}
          />
        </div>
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
        <Uploader
          onChange={(fileList) => {
            certificatesRewards.current = fileList || [];
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h5 className={styles.label} style={{ width: "15%" }}>
          Industry Photos
        </h5>
        <Uploader
          onChange={(fileList) => {
            industryPhotos.current = fileList || [];
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h5 className={styles.label} style={{ width: "15%" }}>
          Industry Logo
        </h5>
        <Uploader
          maxCount={1}
          onChange={(fileList) => {
            industryLogo.current = fileList || [];
          }}
        />
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
