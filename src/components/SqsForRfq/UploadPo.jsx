import React from "react";
import { useState, useRef } from "react";
import { notifyError } from "../../utils/functions";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import styles from "./SqsForRfq.module.css";
import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";

const UploadPO = ({ sqID, index, sqs, updateSqs }) => {
  const poImg = useRef(null);
  const inputRef = useRef();
  const [message, setMessage] = useState("");

  const uploadPO = async (e) => {
    try {
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          poImg.current = e.target.result;
        };
        const file = e.target.files[0];
        reader.readAsDataURL(file);
        setMessage("Uploading...");
        const storage = getStorage();
        const storageRef = ref(storage, `Erogon_Images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file, "data_url");

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setMessage(`Upload is  ${progress}% done`);
          },
          (error) => {
            // Handle unsuccessful uploads
            throw error;
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const body = {
                sqID,
                PO: downloadURL,
              };
              Api.post(PATH.updatePO,body).then((res)=>{
                 setMessage("Uploaded Successfully");
                 const newSqs = [...sqs];
                 newSqs[index] = res?.data || {};
                 updateSqs(newSqs);
              }).catch(err => {
                  console.log(err)
              })
            });
          }
        );
      }
    } catch (err) {
      console.log(err);
      poImg.current = null;
      setMessage("");
      notifyError(
        err?.message || "Something went wrong while uploading to storage"
      );
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}} onClick={(e) => e.stopPropagation()}>
      {poImg.current ? (
        <img
          src={poImg.current}
          style={{ width: "3rem", height: "2.5rem", alignSelf: "center" }}
        />
      ) : (
        <div
          className={styles.btn}
          style={{ backgroundColor: "var(--primary)" }}
          onClick={() => {
            inputRef.current.click();
          }}
        >
          Upload PO
        </div>
      )}
      {message ? (
        <p
          style={{
            marginTop: 6,
            fontSize: "0.6rem",
            alignSelf: "center",
            textAlign: "center",
            color: "green",
          }}
        >
          {message}
        </p>
      ) : (
        <></>
      )}
      <input
        accept="image/*"
        onChange={uploadPO}
        type="file"
        style={{ display: "none" }}
        ref={inputRef}
      />
    </div>
  );
};

export default UploadPO;
