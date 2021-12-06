import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { IN_RFQ, REQUEST_RFQ, RFQ_FAILURE } from "../../utils/types";

// export const setUser = payload => ({type: CREATE_RFQ, payload})



export const createRfq = (data) => async (dispatch) => {
    try{
      dispatch({type:"REQUEST_RFQ"})
         const body = {
           category:data.category,
           subCategory:data.subCategory,
           title:data.title,
           description:data.description,
           design:data.design,
           qty:data.qty,
           budget:data.budget,
           creditPeriod:data.creditPeriod,
           deliveryLocation:data.deliveryLocation,
           applicationClosetime:data.applicationClosetime,
           note:data.note
         };

         console.log(data)
         const res = await Api.post(PATH.createRfq,body);
        //  localStorage.setItem('token', res?.access_token || null);
         dispatch({type:IN_RFQ,payload:res})
         console.log(res);
    }catch(err){
       dispatch({type:"RFQ_FAILURE",payload:"Error"})
    }
  }