import styled from "styled-components";

export const LeftPanel = styled.div`
  margin-top: 40px;
  width: 232px;
  height: 300px;
  margin-left: 90px;
  margin-right: 20px;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0, 25);
  @media (max-width: 600px) {
    display: flex;
    align-self: center;
    align-items: center;
    flex-direction: column;
    margin: 0 0 0 0;
  }
  @media (min-width: 700px) and (max-width: 950px) {
    margin-left: 40px;
  }
  @media (min-width: 1100px) {
    margin-left: -300px;
  }
`;
