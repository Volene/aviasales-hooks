export const formatTime = time => {
  const [hh, mm] = time.split(":");
  return `${hh.padStart(2, "0")}:${mm.padStart(2, "0")}`;
};
export const formatDate = date => {
  const [dd, mm, yy] = date.split(".");
  const d = new Date("20" + yy, mm - 1, dd);
  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
  ];
  const day = weekDays[d.getDay()];
  const month = months[d.getMonth()];
  return `${dd} ${month} 20${yy}, ${day}`;
};
export const formatPrice = price =>
  price > 1000 ? price.toString().replace(/(\d{2})/, "$1 ") : price;