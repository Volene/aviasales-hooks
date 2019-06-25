import {
  SET_CURRENCY,
  GET_CURRENCY_RATE_REQUEST,
  GET_CURRENCY_RATE_SUCCESS,
  GET_CURRENCY_RATE_FAILURE,
  GET_TICKETS_REQUEST,
  GET_TICKETS_FAILURE,
  GET_TICKETS_SUCCESS,
  TOGGLE_FILTER,
} from "./types";
export const toggleFilter = stop => ({ type: TOGGLE_FILTER, payload: stop });

export const setCurrency = curr => ({ type: SET_CURRENCY, payload: curr });

export const getCurrRateRequest = () => ({ type: GET_CURRENCY_RATE_REQUEST });
export const getCurrRateSuccess = currRate => ({
  type: GET_CURRENCY_RATE_SUCCESS,
  payload: currRate
});
export const getCurrRateFailure = err => ({
  type: GET_CURRENCY_RATE_FAILURE,
  payload: err
});

export const getTicketsRequest = () => ({ type: GET_TICKETS_REQUEST });
export const getTicketsSuccess = tickets => ({
  type: GET_TICKETS_SUCCESS,
  payload: tickets
});
export const getTicketsFailure = err => ({
  type: GET_TICKETS_FAILURE,
  payload: err
});
