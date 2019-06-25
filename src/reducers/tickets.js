
import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      return { ...state, isFetched:false };
    case GET_TICKETS_SUCCESS:
        return { ...state, tickets:[...action.payload.tickets], isFetched:true};
    case GET_TICKETS_FAILURE:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
