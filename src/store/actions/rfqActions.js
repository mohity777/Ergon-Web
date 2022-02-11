import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { notifySuccess } from "../../utils/functions";
import { SET_RFQ_REDUCER } from "../../utils/types";
import { setSqReducer } from "./sqActions";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
} from "firebase/storage";
import { setGlobalLoader } from "./globalLoaderActions";

export const setRfqReducer = payload => ({ type: SET_RFQ_REDUCER, payload })

export const createRfq = (data) => async (dispatch, getState) => {
    dispatch(setGlobalLoader(true))
    const {
      category,
      subCategory,
      title,
      description,
      design,
      qty,
      budget,
      creditPeriod,
      deliveryLocation,
      applicationCloseTime,
      note,
    } = data;

    const file = design[0]?.originFileObj;
    const storage = getStorage();
    const storageRef = ref(storage, `Erogon_Images/Design/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, "data_url");

    uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
               category,
               subCategory,
               title,
               description,
               design: downloadURL,
               qty,
               budget,
               creditPeriod,
               deliveryLocation,
               applicationCloseTime,
               note,
             };
             Api.post(PATH.createRfq, body).then((res) => {
                 const newMyRfqs = [res?.data || {}, ...(getState().rfq?.myRfqs || [])];
                 dispatch(setRfqReducer({ myRfqs: newMyRfqs }));
                 dispatch(setGlobalLoader(false));
                 notifySuccess("RFQ creted Successfully");
             }).catch((err)=>{
                dispatch(setGlobalLoader(false));
                throw err;
             });
          });
        }
    );
    await uploadTask;
};

export const getRfs = () => async (dispatch) => {
    try{
        const res = await Api.get(PATH.getRfqs);
        dispatch(setSqReducer({ sqs: res?.data || [] }));
    }catch(err){}
}

export const getMyRfqs = () => async (dispatch) => {
  try {
    const res = await Api.get(PATH.getMyRfqs);
    dispatch(setRfqReducer({ myRfqs: res?.data || [] }));
  } catch (err) {}
};
