import api from "../api";
import { put, call, takeEvery, select, all } from "redux-saga/effects";
import {
  normalizeTickets,
  getCurrRateSuccess,
  getCurrRateFailure,
  getTicketsSuccess,
  getTicketsFailure
} from "../actions";
import { GET_CURRENCY_RATE_REQUEST } from "../actions/types";
import { formatTime, formatDate, formatPrice } from "../utils";

export function* NormalizeData() {
  const { currency } = yield select();
  const { tickets } = yield select();
  const data = tickets.tickets.map(
    ({
      departure_time,
      arrival_time,
      departure_date,
      arrival_date,
      price,
      ...ticket
    }) => ({
      ...ticket,
      arrival_date: formatDate(arrival_date),
      departure_date: formatDate(departure_date),
      departure_time: formatTime(departure_time),
      arrival_time: formatTime(arrival_time),
      price,
      price_RUB: formatPrice(price),
      price_USD: formatPrice(Math.floor(price * currency.curr.USD)),
      price_EUR: formatPrice(Math.floor(price * currency.curr.EUR))
    })
  );
  yield put(normalizeTickets(data));
}

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
function* fetchTicketsCurrSaga() {
  yield all([call(fetchTicketsSaga), call(fetchCurrRateSaga)]);
  yield call(NormalizeData);
}
export function* rootSaga() {
  yield [
    yield takeEvery(GET_CURRENCY_RATE_REQUEST, fetchTicketsCurrSaga)
  ];
}
