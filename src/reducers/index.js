import { combineReducers } from "redux";
import currency  from './currency'
import tickets from './tickets'
import stops from './stops'

export default combineReducers({ 
  currency,
  tickets,
  stops
});
