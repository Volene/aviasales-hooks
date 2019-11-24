import axios from "axios";

export default {
  currRate: () =>
    axios
      .get("https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR")
      .then(res => res.data),
  tickets: () =>
    axios.get("https://api.myjson.com/bins/14ytqs").then(res => res.data)
};
