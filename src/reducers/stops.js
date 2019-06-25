import { TOGGLE_FILTER } from "../actions/types";

const initState = { 
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3  
};
export default (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return { ...action.payload };
    default:
      return state;
  }
};
