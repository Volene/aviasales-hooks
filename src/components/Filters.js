import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleOnly, toggleOne, toggleAll } from "../actions/";
import Checkbox from "./Checkbox";
const OnlyButton = styled.div`
  width: 45%;
  justify-content: flex-end;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 600;
  color: white;
  opacity:0.01;
  display: inline-flex;
  cursor: pointer;
  &:first-child {
    margin-left: 10px;
  }
  &:hover {
    opacity:1;
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
    background-color: #f1fcff;
  }
`;
const CheckBoxWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
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
  const { allChecked, list } = useSelector(state => state.stops);
  const renderFilters = () => {
    return list.map(item => (
      <CheckBoxContainer key={item.id}>
        <CheckBoxWrapper>
          <label>
            <Checkbox
              key={item.id}
              type="checkbox"
              name={item.name}
              value={item.name}
              checked={item.isChecked}
              onChange={() => dispatch(toggleOne(item.name))}
            />
            <CheckboxLabel>{item.name}</CheckboxLabel>
          </label>

          <OnlyButton
            name={item.name}
            onClick={() => dispatch(toggleOnly(item.name))}
          >
            только
          </OnlyButton>
        </CheckBoxWrapper>
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
            onChange={() => dispatch(toggleAll())}
          />
          <CheckboxLabel>Все</CheckboxLabel>
        </label>
      </CheckBoxContainer>
      {renderFilters()}
    </CheckBoxesContainer>
  );
};

export default Filters;
