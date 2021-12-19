import { REQUEST_RFQ,IN_RFQ,RFQ_FAILURE, GET_RFQ_REQUEST, GET_RFQ_SUCCESS, GET_RFQ_FAILURE } from "../../utils/types";


const INITIAL_STATE1 = {
    createRfq : {}
    
    }

export const createReducer = (state = INITIAL_STATE1, action) => {
    switch (action.type) {
      case REQUEST_RFQ:
        return { ...state, 
        loading:true,
           rfq:action.payload
        
        };
      case IN_RFQ:
        return { ...state,
        loading:false,
            rfq:action.payload
    };
        case RFQ_FAILURE:
          return{ ...state,
        loading:false,
            rfq:action.payload}
      default:
        return state;
    }
  };


export const getRfq = (state = {state:{}}, action) => {
    switch (action.type) {
      case GET_RFQ_REQUEST:
        return { ...state, 
        loading:true,
           getrfq:action.payload
        
        };
      case GET_RFQ_SUCCESS:
        return { ...state,
        loading:false,
            getrfq:action.payload
    };
        case GET_RFQ_FAILURE:
          return{ ...state,
        loading:false,
            rfq:action.payload}
      default:
        return state;
    }
  };

