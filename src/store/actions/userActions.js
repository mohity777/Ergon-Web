import Api from "../../utils/api";
import { PATH } from "../../utils/apiPath";
import { SET_USER } from "../../utils/types";

export const setUser = payload => ({type: SET_USER, payload})

export const signUp = (data) => async (dispatch) => {
  try{
       const body = {
         email: data.email,
         password: data.password,
         confirmedPassword: data.confirmedPassword,
         companyName: data.companyName,
         gstin: data.gstin,
         address: data.address,
         ownerName: data.ownerName,
       };
       const res = await Api.post(PATH.signUp,body);
       localStorage.setItem('token', res?.access_token || null);
       dispatch(setUser({token: res?.access_token || '', ...( res?.user_data || {} )}))
       console.log(res);
  }catch(err){
      throw err;
  }
}

export const login = data => async (dispatch) => {
  try{
      const body = {
        email: data.email,
        password: data.password
      }
      const res = await Api.post(PATH.login, body);
      localStorage.setItem('token', res?.access_token || null);
      dispatch(setUser({ token: res?.access_token || null, ...(res?.user_data || {}) }))
  }catch(err){
     throw err;
  }
}

export const getUser = () => async (dispatch) => {
  try{
      const res = await Api.get(PATH.getUser);
      dispatch(setUser({ ...(res?.data || {} ) }));
  }catch(err){}
}