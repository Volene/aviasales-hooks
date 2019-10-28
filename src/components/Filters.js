import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleFilter } from "../actions/";
import Checkbox from "./Checkbox";
const OnlyButton = styled.a`
  width: 45%;
  justify-content: flex-end;
  font-size: 12px;
  font-weight: 600;
  color: white;
  display: inline-flex;
  cursor: pointer;
  &:first-child {
    margin-left: 10px;
  }
  &:hover {
    text-transform: uppercase;
    display: inline-flex;
    color: #2196f3;
    font-size: 11px;
  }
`;

const CheckBoxContainer = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  padding-left: 15px;
  &:hover {
    background-color: #f1fcff;
    color: black;
  }
  a:hover {
    display: inline-flex;
    background-color: #f1fcff;
  }
`;
const CheckBoxexContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const CheckboxLabel = styled.span`
  margin-left: 8px;
`;
function Filters() {
  const dispatch=useDispatch();
  const [filterz, toggleFilterz] = useState({
    allChecked: true,
    list: [
      { id: 0, value: 0, name: "Без пересадок", isChecked: true },
      { id: 1, value: 1, name: "1 пересадка", isChecked: true },
      { id: 2, value: 2, name: "2 пересадки", isChecked: true },
      { id: 3, value: 3, name: "3 пересадки", isChecked: true }
    ]
  });

  const handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    let filters;
    toggleFilterz(() => {
      let { list, allChecked } = filterz;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every(item => item.isChecked);
      }
      filters = list
        .filter(el => el.isChecked)
        .reduce((acc, { id, value }) => ({ ...acc, [id]: value }), []);
      dispatch(toggleFilter(filters));
      return { list, allChecked };
    });
  };

  const handleClick = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    let filters;
    toggleFilterz(() => {
      let { list, allChecked } = filterz;
      allChecked = checked;
      list = list.map(item =>
        item.name === itemName ? { ...item, isChecked: true } : item
      );
      list = list.map(item =>
        item.name !== itemName ? { ...item, isChecked: false } : item
      );
      allChecked = list.every(item => !item.isChecked);
      filters = list
        .filter(el => el.isChecked)
        .reduce((acc, { id, value }) => ({ ...acc, [id]: value }), []);
      dispatch(toggleFilter(filters));
      return { list, allChecked };
    });
  };

  const renderFilters = () => {
    const { list } = filterz;
    return list.map(item => (
      <CheckBoxContainer key={item.id}>
        <label>
          <Checkbox
            key={item.id}
            type="checkbox"
            name={item.name}
            value={item.name}
            checked={item.isChecked}
            onChange={handleChange}
          />
          <CheckboxLabel>{item.name}</CheckboxLabel>
        </label>
        <OnlyButton name={item.name} onClick={handleClick}>
          только
        </OnlyButton>
      </CheckBoxContainer>
    ));
  };

  return (
    <CheckBoxexContainer>
      <CheckBoxContainer>
        <label>
          <Checkbox
            name="checkAll"
            checked={filterz.allChecked}
            onChange={handleChange}
          />
          <CheckboxLabel>Все</CheckboxLabel>
        </label>
      </CheckBoxContainer>
      {renderFilters()}
    </CheckBoxexContainer>
  );
}

export default Filters;
