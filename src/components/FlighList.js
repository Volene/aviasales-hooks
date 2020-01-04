import React from "react";
import { useSelector } from "react-redux";
import { getTicketsRequest } from "../actions";
import { useFetch } from "../hooks";
import BA from "../images/BA.png";
import SU from "../images/SU.png";
import TK4 from "../images/TK4.png";
import S7 from "../images/S7.png";
import BAS from "../images/BAS.png";
import SUS from "../images/SUS.png";
import TKS from "../images/TKS.png";
import S7S from "../images/S7S.png";
import styled from "styled-components";

const TicketListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1100px) {
    width: 580px;
  }
`;
const Ticket = styled.div`
  max-width: 570px;
  height: 160px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  margin-top: 40px;
  margin-bottom: 10px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 5px;
  }
`;
const Container = styled.div`
  display: block;
`;
const ContainerLine = styled(Container)`
  margin-bottom: 25px;
`;
const CarrierLogo = styled.img`
  width: 120px;
  height: 35px;

  @media (max-width: 600px) {
    display: none;
  }
`;
const CarrierLogoSmall = styled.img`
  width: 55px;
  height: 55px;

  @media (min-width: 600px) {
    display: none;
  }
`;
const LogoButtonWrapper = styled.div`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  width: 33%;
  border-right: 1px solid #eceff1;
`;
const BuyButton = styled.button`
  max-width: 80%;
  min-width: 80%;
  border-radius: 5px;
  white-space: pre;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  color: white;
  border: none;
  outline: none;
  height: 56px;
  background: #ff6d00;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px #d64d08;
  :hover {
    background: #ff8124;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3.1vw;
    line-height: 1.5;
  }
`;
const DepDescriptionWrapper = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: space-around;
  }
`;

const DepTimeArrTime = styled.p`
  margin-top: 20px;
  color: #4a4a4a;
  font-size: 2.66em;
  font-weight: 300;
  line-height: 26px;
  @media only screen and(min-width:600px) {
    font-size: 2vw;
  }
`;
const Line = styled.hr`
  margin: 0 20px 0 -15px;
  width: 96px;
  margin-bottom: 19px;
  border: 1px solid #d2d5d6;
  @media (max-width: 600px) {
    display: none;
  }
  &:after {
    position: absolute;
    color: #d2d5d6;
    margin-top: -9.5px;
    margin-left: 97px;
    font-size: 1.09em;
    content: "✈";
  }
`;
const Transfers = styled.p`
  margin-right: 2.33em;
  color: #8b9497;
  text-align: center;
  margin-bottom: 0.2em;
  font-weight: 600;
  line-height: 12, 1px;
  font-size: 0.9em;
  @media (max-width: 600px) {
    margin-left: -3px;
    width: 70px;
    margin-right: 5px;
    padding-bottom: 30px;
  }
`;
const DestArrName = styled.p`
  min-height: 30px;
  padding-top: 10px;
  color: #4a4a4a;
  font-weight: 600;
  line-height: 1.5em;
  white-space: nowrap;
  @media (max-width: 600px) {
    font-size: 1.1em;
    text-align: center;
    white-space: pre-wrap;
  }
`;
const DestArrDate = styled(DestArrName)`
  font-weight: 300;
  padding-top: 0;
`;
//http://pics.avs.io/99/36/TK.png 120/35
//http://pics.avs.io/al_square/55/55/SU@2x.png
const setLogo = carrier => {
  switch (carrier) {
    case "BA":
      return BA;
    case "TK":
      return TK4;
    case "S7":
      return S7;
    case "SU":
      return SU;
    case "BAS":
      return BAS;
    case "TKS":
      return TKS;
    case "S7S":
      return S7S;
    case "SUS":
      return SUS;
    default:
      return carrier;
  }
};

const setStops = stops => {
  switch (stops) {
    case 0:
      return "";
    case 1:
      return `${stops} пересадка`;
    default:
      return `${stops} пересадки`;
  }
};

const getVisibleTickets = (tickets, stops) => {
  if (!tickets) return null;
  return [...tickets]
    .filter(el => stops.includes(el.stops))
    .sort((a, b) => a.price - b.price);
};
const renderFlighs = (tickets, activeCurr, rate) => {
  return tickets.map(
    ({
      price,
      carrier,
      departure_date,
      departure_time,
      arrival_date,
      arrival_time,
      stops,
      origin_name,
      origin,
      destination,
      destination_name,
      price_RUB,
      price_USD,
      price_EUR
    }) => {
      return (
        <Ticket key={price}>
          <LogoButtonWrapper>
            <CarrierLogoSmall src={setLogo(carrier + "S")} />
            <CarrierLogo src={setLogo(carrier)} />
            <BuyButton>
              Купить {"\r\n"}
              за {activeCurr === "USD" && "$"}
              {activeCurr === "EUR" && "€"}
              {activeCurr === "RUB"
                ? price_RUB
                : activeCurr === "USD"
                ? price_USD
                : activeCurr === "EUR"
                ? price_EUR
                : price}
              {activeCurr === "RUB" && "₽"}
            </BuyButton>
          </LogoButtonWrapper>
          <DepDescriptionWrapper>
            <Container>
              <DepTimeArrTime>{departure_time}</DepTimeArrTime>
              <DestArrName>
                {origin}, {"\r\n"}
                {origin_name}
              </DestArrName>
              <DestArrDate>{departure_date}</DestArrDate>
            </Container>
            <ContainerLine>
              <Transfers>{setStops(stops) || "⠀"}</Transfers>
              <Line />
            </ContainerLine>
            <Container>
              <DepTimeArrTime>{arrival_time}</DepTimeArrTime>
              <DestArrName>
                {destination}, {"\r\n"}
                {destination_name}
              </DestArrName>
              <DestArrDate>{arrival_date}</DestArrDate>
            </Container>
          </DepDescriptionWrapper>
        </Ticket>
      );
    }
  );
};
const FlighList = () => {
  const { filters } = useSelector(state => state.stops);
  const { isFetched, tickets } = useSelector(state => state.tickets);
  const { rate, activeCurr } = useSelector(state => state.currency);
  const visibleTickets = getVisibleTickets(tickets, filters);
  useFetch(getTicketsRequest);
  return (
    <TicketListWrapper>
      {isFetched ? renderFlighs(visibleTickets, activeCurr, rate) : null}
    </TicketListWrapper>
  );
};

export default FlighList;
