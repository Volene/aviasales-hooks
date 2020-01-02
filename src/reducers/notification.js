import { SEND_NOTIFICATION } from "../actions/types";
const notification = (_, action) => {
  switch (action.type) {
    case SEND_NOTIFICATION:
      return "Normalizing data";
    default:
      return null;
  }
};

export default notification;
