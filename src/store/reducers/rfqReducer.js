import { REQUEST_RFQ,IN_RFQ,RFQ_FAILURE } from "../../utils/types";


const INITIAL_STATE1 = {
    createRfq : {}
    
    }


const createReducer = (state = INITIAL_STATE1, action) => {
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

  export default createReducer;