// import { notificationAction } from "../actions";
// import { GET_TICKETS_SUCCESS } from "../actions/types";

// const formatTime = time => {
//   const [hh, mm] = time.split(":");
//   return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}`;
// };
// const formatDate = date => {
//   const [dd, mm, yy] = date.split(".");
//   const d = new Date("20" + yy, mm - 1, dd);
//   const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
//   const months = [
//     "янв",
//     "фев",
//     "мар",
//     "апр",
//     "мая",
//     "июн",
//     "июл",
//     "авг",
//     "сен",
//     "окт",
//     "ноя",
//     "дек"
//   ];
//   const day = weekDays[d.getDay()];
//   const month = months[d.getMonth()];
//   return `${dd} ${month} 20${yy}, ${day}`;
// };
// const formatPrice = price =>
//   price > 1000 ? price.toString().replace(/(\d{2})/, "$1 ") : price;

// export const normalizeMiddleware = ({
//   dispatch,
//   getState
// }) => next => action => {
//   if (action.type.includes(GET_TICKETS_SUCCESS)) {
//     //dispatch(notificationAction());
//     const { currency } = getState();
//     const data = action.payload.tickets.map(
//       ({
//         departure_time,
//         arrival_time,
//         departure_date,
//         arrival_date,
//         price,
//         ...ticket
//       }) => ({
//         ...ticket,
//         arrival_date: formatDate(arrival_date),
//         departure_date: formatDate(departure_date),
//         departure_time: formatTime(departure_time),
//         arrival_time: formatTime(arrival_time),
//         price,
//         price_RUB: formatPrice(price),
//         price_USD: formatPrice(Math.floor(price * currency.curr.USD)),
//         price_EUR: formatPrice(Math.floor(price * currency.curr.EUR))
//       })
//     );
//     next({ ...action, payload: { tickets: data } });
//   } else {
//     next(action);
//   }
// };
