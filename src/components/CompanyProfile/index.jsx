import { Button, Form } from "antd";
import {
  getDownloadURL,
  getStorage, ref,
  uploadBytesResumable
} from "firebase/storage";
import React, { useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoader } from "../../store/actions/globalLoaderActions";
import { getUser } from "../../store/actions/userActions";
import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { INDUSTRY_OPTIONS } from "../../utils/constants";
import { notifyError, notifySuccess } from "../../utils/functions";
import CustomInput from "../CustomInput";
import DropdownPicker from "../DropdownPicker";
import TagsInput from "../TagsInput";
import Uploader from "../Uploader";
import styles from "./CompanyProfile.module.css";

const CompanyProfile = (props) => {
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

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const company = useMemo(() => user?.company || {} , [user]);

  const uploadToFirebase = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, `Erogon_Images/${file.name}`);
    const uploadTask = await uploadBytesResumable(storageRef, file, "data_url");
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  };

  const onFinish = async () => {
    try {
      dispatch(setGlobalLoader(true));
      const res = await Promise.all([
        Promise.all(
          certificatesRewards.current.map(async (it) => {
            const url = await uploadToFirebase(it?.originFileObj);
            return url;
          })
        ),
        Promise.all(
          industryPhotos.current.map(async (it) => {
            const url = await uploadToFirebase(it?.originFileObj);
            return url;
          })
        ),
        Promise.all(
          industryLogo.current.map(async (it) => {
            const url = await uploadToFirebase(it?.originFileObj);
            return url;
          })
        ),
      ]);
      const data = {
        companyName: company?.companyName,
        gstin: company?.gstin,
        address: company?.address,
        ownerName: company?.ownerName,
        capacity: capacity.current,
        capability: capabilities.current,
        area: area.current,
        industry: industry.current,
        products: products.current,
        workedWith: workedWith.current,
        machines: machines.current,
        certificatesRewards: res[0],
        industryPhotos: res[1],
        industryLogo: res[2],
      };
      await Api.post(PATH.signUpDetails, data);
      await dispatch(getUser());
      dispatch(setGlobalLoader(false));
      notifySuccess('Successfully Updated')
    } catch (err) {
      dispatch(setGlobalLoader(false));
      notifyError(err?.message || "Something Went Wrong!!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <TagsInput
          valueToSet={company?.products ? company?.products : []}
          placeholder="Gas Filter"
          label="Product List"
          name="products"
          onChangeTags={(tags) => {
            products.current = tags;
          }}
        />
        <TagsInput
          valueToSet={company?.capability ? company?.capability : []}
          placeholder="Capabilities"
          label="Capabilities"
          name="capabilities"
          onChangeTags={(tags) => {
            capabilities.current = tags;
          }}
        />
      </div>
      <div>
        <div className={styles.row}>
          <TagsInput
            valueToSet={company?.machines ? company?.machines : []}
            placeholder="Lathe"
            label="Machines"
            name="machines"
            onChangeTags={(tags) => (machines.current = tags)}
          />
          <CustomInput
            placeholder="Fabrication"
            label="Capacity"
            valueToSet={company?.capacity || "0"}
            onChange={(e) => {
              capacity.current = e.target.value;
            }}
          />
        </div>
        <div className={styles.row}>
          <div className={styles.inputView}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h5 className={styles.label}>Industry</h5>
              <DropdownPicker
                onChange={(value) => {
                  industry.current = value;
                }}
                items={INDUSTRY_OPTIONS}
                valueToSet={company?.industry}
                className={`${styles.input}`}
                placeholder={"Industry"}
              />
            </div>
          </div>
          <CustomInput
            valueToSet={company?.area || ""}
            placeholder="Delhi"
            label="Area/City"
            onChange={(e) => {
              area.current = e.target.value;
            }}
          />
        </div>
      </div>
      <TagsInput
        valueToSet={company?.certifications ? company?.certifications : []}
        placeholder="ISO 9001"
        label="Certifications"
        name="certifications"
        onChangeTags={(tags) => {}}
      />
      <TagsInput
        valueToSet={company?.workedWith ? company?.workedWith : []}
        placeholder="Tata Motars"
        label="Worked with"
        name="workedWith"
        onChangeTags={(tags) => {
          workedWith.current = tags;
        }}
      />
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
    </div>
  );
};

export default CompanyProfile;
