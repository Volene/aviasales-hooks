import { produce } from "immer";
import {
  SET_CURRENCY,
  GET_CURRENCY_RATE_REQUEST,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAILURE
} from "../actions/types";

export default produce(
  (draft, action) => {
    switch (action.type) {
      case GET_CURRENCY_RATE_REQUEST:
        return draft;
      case GET_CURRENCY_RATE_SUCCESS:
        draft.curr = action.payload.rates;
        return
      case GET_CURRENCY_RATE_FAILURE:
        draft.err = {};
        return
      case SET_CURRENCY:
        draft.activeCurr = action.payload;
        draft.rate = draft.curr[action.payload] || 1;
        return
      default:
        return draft;
    }
  },
  {
    activeCurr: "RUB",
    rate: 1,
    curr: {
      EUR: 0.0139979759,
      USD: 0.0159408949
    }
  }
);
