import React from "react";
import styled from "styled-components";
import { toggleFilter } from "../actions/";
import { useCheckbox } from "../hooks";
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
const CheckBoxesContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }
`;
const CheckboxLabel = styled.span`
  margin-left: 8px;
`;

const Filters = () => {
  const [filters, handleChange, handleOnlyChange] = useCheckbox( {
    allChecked: true,
    list: [
      { id: 0, value: 0, name: "Без пересадок", isChecked: true },
      { id: 1, value: 1, name: "1 пересадка", isChecked: true },
      { id: 2, value: 2, name: "2 пересадки", isChecked: true },
      { id: 3, value: 3, name: "3 пересадки", isChecked: true }
    ]
  },toggleFilter);
  const renderFilters = () => {
    const { list } = filters;
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
        <OnlyButton name={item.name} onClick={handleOnlyChange}>
          только
        </OnlyButton>
      </CheckBoxContainer>
    ));
  };

  return (
    <CheckBoxesContainer>
      <CheckBoxContainer>
        <label>
          <Checkbox
            name="checkAll"
            checked={filters.allChecked}
            onChange={handleChange}
          />
          <CheckboxLabel>Все</CheckboxLabel>
        </label>
      </CheckBoxContainer>
      {renderFilters()}
    </CheckBoxesContainer>
  );
};

export default Filters;
