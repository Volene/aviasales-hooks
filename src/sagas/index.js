import { put, call,takeEvery } from "redux-saga/effects";
import {
  getCurrRateSuccess,
  getCurrRateFailure,
  getTicketsSuccess,
  getTicketsFailure
} from "../actions";
import axios from "axios";
import {
  GET_CURRENCY_RATE_REQUEST,
  GET_TICKETS_REQUEST,
} from "../actions/types";

export function* loadCurrRate() {
  try {
    const currRates = yield call(() =>
      axios
        .get("https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR")
        .then(response => response.data)
    );
    yield put(getCurrRateSuccess(currRates));
  } catch (err) {
    yield put(getCurrRateFailure(err.toString));
  }
}
export function* loadTickets() {
  try {
    const tickets = yield call(() =>
      axios
        .get("https://api.myjson.com/bins/14ytqs")
        .then(response => response.data)
    );
    yield put(getTicketsSuccess(tickets));
  } catch (err) {
    yield put(getTicketsFailure(err.toString));
  }
}



export function* rootSaga() {
  yield [
    yield takeEvery(GET_CURRENCY_RATE_REQUEST, loadCurrRate),
    yield takeEvery(GET_TICKETS_REQUEST, loadTickets)
  ];
}

