import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {  toggleOnly, toggleOne, toggleAll } from "../actions/";
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
  const dispatch = useDispatch();
  const { list} = useSelector(state => state.stops)
  const { allChecked} = useSelector(state => state.stops);

  const renderFilters = () => {
    return list.map(item => (
      <CheckBoxContainer key={item.id}>
        <label>
          <Checkbox
            key={item.id}
            type="checkbox"
            name={item.name}
            value={item.name}
            checked={item.isChecked}
            onChange={()=>dispatch(toggleOne(item.name))}
          />
          <CheckboxLabel>{item.name}</CheckboxLabel>
        </label>
        <OnlyButton name={item.name} onClick={()=>dispatch(toggleOnly(item.name))}>
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
            checked={allChecked}
            onChange={()=>dispatch(toggleAll())}
          />
          <CheckboxLabel>Все</CheckboxLabel>
        </label>
      </CheckBoxContainer>
      {renderFilters()}
    </CheckBoxesContainer>
  );
};

export default Filters;
