import React, { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../hooks";
import { useDispatch } from "react-redux";
import { setCurrency, getCurrRateRequest } from "../actions";
const ButtonGroup = styled.div`
  margin: 0 15px 0 15px;
  width: 200px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #d2d5d6;
  button:first-child {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  button:not(:last-child) {
    border: 0px;
    border-right: 1px solid #d2d5d6;
  }
  button:last-child {
    border: 0;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
`;
const Curr = styled.div`
  margin: 10px 15px 10px 15px;
  margin-bottom: 20px;
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 1em;
  font-weight: 600;
  line-height: 19px;
`;
const Button = styled.button`
  background: ${props => (props.primary ? "#2196f3" : "white")};
  color: ${props => (props.primary ? "white" : "#2196f3")};
  height: 100%;
  width: 33.3%;
  font-size: 1em;
  outline: none;
  :disabled {
    opacity: 0.4;
  }
  :hover {
    cursor: pointer;
    transition: all 1s ease-out;
    background: ${props => (props.primary ? "#2196f3" : "#f2fcff")};
    color: ${props => (props.primary ? "white" : "#2196f3")};
    border: 1px solid #2196f3;
  }
`;

const renderButtons = (buttons, setActBut, activeButton) =>
  buttons.map(({ name, primary }) => {
    return (
      <Button
        key={name}
        index={name}
        value={name}
        onClick={() => setActBut(name)}
        primary={activeButton === name && primary}
      >
        {name}
      </Button>
    );
  });
const Currencies = () => {
  const dispatch = useDispatch();
  const buttons = [
    { id: 0, name: "RUB", primary: true },
    { id: 1, name: "USD", primary: true },
    { id: 2, name: "EUR", primary: true }
  ];

  const [activeButton, setActiveButtons] = useState("RUB");

  const setActiveButton = name => {
    setActiveButtons(name);
  };
  useFetch(getCurrRateRequest);

  return (
    <>
      <Curr>Валюта </Curr>
      <ButtonGroup onClick={e => dispatch(setCurrency(e.target.value))}>
        {renderButtons(buttons, setActiveButton, activeButton)}
      </ButtonGroup>
    </>
  );
};
export default Currencies;
