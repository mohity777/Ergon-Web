import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducers";
import {composeWithDevTools} from 'redux-devtools-extension'


const initialState = ({})

const middleware = [thunk]
const Store = createStore(Reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default Store;
