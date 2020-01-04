import {
  SET_CURRENCY,
  GET_CURRENCY_RATE_REQUEST,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAILURE,
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
  TOGGLE_ONLY,
  TOGGLE_ONE,
  TOGGLE_ALL,
  SEND_NOTIFICATION,
  NORMALIZE_DATA
} from "./types";
const notificationAction = () => ({ type: SEND_NOTIFICATION });
const toggleAll = () => ({ type: TOGGLE_ALL });
const toggleOnly = name => ({ type: TOGGLE_ONLY, name });
const toggleOne = name => ({ type: TOGGLE_ONE, name });
const setCurrency = curr => ({ type: SET_CURRENCY, payload: curr });
const getCurrRateRequest = () => ({ type: GET_CURRENCY_RATE_REQUEST });
const getCurrRateSuccess = currRate => ({
  type: GET_CURRENCY_RATE_SUCCESS,
  payload: currRate
});
const getCurrRateFailure = err => ({
  type: GET_CURRENCY_RATE_FAILURE,
  payload: err
});

const getTicketsRequest = () => ({ type: GET_TICKETS_REQUEST });
const getTicketsSuccess = tickets => ({
  type: GET_TICKETS_SUCCESS,
  payload: tickets
});
const getTicketsFailure = err => ({
  type: GET_TICKETS_FAILURE,
  payload: err
});
const normalizeTickets = tickets => ({
  type:  NORMALIZE_DATA,
  payload: tickets
});
export {normalizeTickets,
  notificationAction,
  toggleAll,
  toggleOnly,
  toggleOne,
  setCurrency,
  getCurrRateRequest,
  getCurrRateSuccess,
  getCurrRateFailure,
  getTicketsRequest,
  getTicketsSuccess,
  getTicketsFailure
};
