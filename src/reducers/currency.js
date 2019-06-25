import {
  SET_CURRENCY,
  GET_CURRENCY_RATE_REQUEST,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAILURE
} from "../actions/types";

const initState = {
  activeCurr: "RUB",
  rate: 1,
  curr: {
    EUR: 0.0139979759,
    USD: 0.0159408949
  }
};
export default (state = initState, action) => {
  switch (action.type) {
    case GET_CURRENCY_RATE_REQUEST:
      return { ...state };
    case GET_CURRENCY_RATE_SUCCESS:
      return { ...state, curr: action.payload.rates };
    case GET_CURRENCY_RATE_FAILURE:
      return { ...state, err: {} };
    case SET_CURRENCY:
      return {
        ...state,
        activeCurr: action.payload,
        rate: state.curr[action.payload] || 1
      };
    default:
      return state;
  }
};
