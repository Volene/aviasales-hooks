import { produce } from "immer";
import {
  GET_TICKETS_REQUEST,
  GET_TICKETS_SUCCESS,
  GET_TICKETS_FAILURE
} from "../actions/types";

export default produce((draft, action) => {
  switch (action.type) {
    case GET_TICKETS_REQUEST:
      draft.isFetched = false;
      return;
    case GET_TICKETS_SUCCESS:
      draft.tickets = action.payload.tickets;
      draft.isFetched = true;
      return;
    case GET_TICKETS_FAILURE:
      draft.err = action.payload;
      return;
    default:
      return draft;
  }
}, {});
