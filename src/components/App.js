import React from "react";
import logo from "../images/logo.png";
import Currencies from "./Currencies";
import FlighList from "./FlighList";
import Filters from "./Filters";
import { LeftPanel } from "./LeftPanel";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Curr = styled.div`
  margin: 10px 15px 10px 15px;
  color: #4a4a4a;
  font-family: "Open Sans";
  font-size: 1em;
  font-weight: 600;
  line-height: 19px;
`;

function App() {
  return (
    <>
      <header style={{ textAlign: "center", width: "100%", margin: "auto" }}>
        <img src={logo} alt="logo" />
      </header>
      <Container>
        <LeftPanel>
          <Currencies />
          <Curr>Количество пересадок</Curr>
          <Filters />
        </LeftPanel>
        <FlighList />
      </Container>
    </>
  );
}

export default App;
