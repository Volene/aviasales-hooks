import {
  SET_CURRENCY,
  GET_CURRENCY_RATE_REQUEST,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAILURE,
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
  TOGGLE_FILTER
} from "./types";
const toggleFilter = stop => ({ type: TOGGLE_FILTER, payload: stop });

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
export {
  toggleFilter,
  setCurrency,
  getCurrRateRequest,
  getCurrRateSuccess,
  getCurrRateFailure,
  getTicketsRequest,
  getTicketsSuccess,
  getTicketsFailure
};
