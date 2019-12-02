import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const useFetch = action => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action());
  }, [action, dispatch]);
};

export const useCheckbox = ( customFilters,actionSetToggle=false) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(customFilters);
  
  const getFilters = list => {
    return list
      .filter(el => el.isChecked)
      .reduce((acc, { id, value }) => ({ ...acc, [id]: value }), []);
  };
  
  const handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    setFilters(({ list, allChecked }) => {
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
      }
      allChecked = list.every(item => item.isChecked);
      actionSetToggle && dispatch(actionSetToggle(getFilters(list)));
      return { list, allChecked };
    });
  };
  
  const handleOnlyChange = e => {
    let itemName = e.target.name;
    setFilters(({ list, allChecked }) => {
      list = list.map(item =>
        item.name === itemName
          ? { ...item, isChecked: true }
          : { ...item, isChecked: false }
      );
      allChecked = list.every(el => el.isChecked);
      actionSetToggle && dispatch(actionSetToggle(getFilters(list)));
      return { list, allChecked };
    });
  };
  return [filters,handleChange,handleOnlyChange]
};
