import api from "../api";
import { put, call, takeEvery } from "redux-saga/effects";
import {
  getCurrRateSuccess,
  getCurrRateFailure,
  getTicketsSuccess,
  getTicketsFailure
} from "../actions";
import {
  GET_CURRENCY_RATE_REQUEST,
  GET_TICKETS_REQUEST
} from "../actions/types";
export function* fetchCurrRateSaga() {
  try {
    const currRates = yield call(() => api.currRate());
    yield put(getCurrRateSuccess(currRates));
  } catch (err) {
    yield put(getCurrRateFailure(err.toString));
  }
}
export function* fetchTicketsSaga() {
  try {
    const tickets = yield call(() => api.tickets());
    yield put(getTicketsSuccess(tickets));
  } catch (err) {
    yield put(getTicketsFailure(err.toString));
  }
}

export function* rootSaga() {
  yield [
    yield takeEvery(GET_CURRENCY_RATE_REQUEST, fetchCurrRateSaga),
    yield takeEvery(GET_TICKETS_REQUEST, fetchTicketsSaga)
  ];
}
