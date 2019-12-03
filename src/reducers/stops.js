import { produce } from "immer";
import { TOGGLE_ALL, TOGGLE_ONLY, TOGGLE_ONE } from "../actions/types";

const getFilters = f => {
  return f.reduce((a, e) => {
    e.isChecked && a.push(e.value);
    return a;
  }, []);
};
export default produce(
  (draft, action) => {
    switch (action.type) {
      case TOGGLE_ONE:
        draft.list.forEach(e =>
          action.name === e.name ? (e.isChecked = !e.isChecked) : e.isChecked
        );
        draft.allChecked = draft.list.every(e => e.isChecked);
        draft.filters = getFilters(draft.list);
        return;
      case TOGGLE_ALL:
        draft.allChecked = !draft.allChecked;
        draft.list.forEach(e =>
          draft.allChecked ? (e.isChecked = true) : (e.isChecked = false)
        );
        draft.filters = getFilters(draft.list);
        return;
      case TOGGLE_ONLY:
        draft.list.forEach(e =>
          action.name === e.name ? (e.isChecked = true) : (e.isChecked = false)
        );
        draft.filters = getFilters(draft.list);
        draft.allChecked = draft.list.every(e => e.isChecked);
        return;
      default:
        return draft;
    }
  },
  {
    allChecked: true,
    list: [
      { id: 0, value: 0, name: "Без пересадок", isChecked: true },
      { id: 1, value: 1, name: "1 пересадка", isChecked: true },
      { id: 2, value: 2, name: "2 пересадки", isChecked: true },
      { id: 3, value: 3, name: "3 пересадки", isChecked: true }
    ],
    filters: [0, 1, 2, 3]
  }
);
