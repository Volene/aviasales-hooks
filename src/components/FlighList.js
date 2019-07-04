import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTicketsRequest } from "../actions/index";
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

function setLogo(carrier) {
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
}

function setStops(stops) {
  switch (stops) {
    case 0:
      return "";
    case 1:
      return `${stops} пересадка`;
    default:
      return `${stops} пересадки`;
  }
}
function formatDate(date) {
  const x = date.split(".");
  const [dd,mm,yy]=x;
  const d = new Date("20" + yy, mm - 1, dd);
  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "мая",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек"
  ];
  const day = weekDays[d.getDay()];
  const month = months[d.getMonth()];
  return `${dd} ${month} 20${yy}, ${day}`;
}
function formatTime(time) {
  const x = time.split(":");
  if (x[0] < 10) return "0" + time;
  return time;
}
function formatPrice(price, rate, curr) {
  const pricez = Math.floor(price * rate);
  if (pricez > 1000) {
    return pricez.toString().replace(/(\d{2})/, "$1 ");
  } else {
    return pricez;
  }
}
function FlighList(props) {
  const { tickets, rate, activeCurr, isFetched, getTicketsRequest } = props;
  useEffect(() => {
    getTicketsRequest();
  }, [getTicketsRequest]);

  const renderFlighs = () => {
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
        destination_name
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
                {formatPrice(price, rate, activeCurr)}
                {activeCurr === "RUB" && "₽"}
              </BuyButton>
            </LogoButtonWrapper>
            <DepDescriptionWrapper>
              <Container>
                <DepTimeArrTime>{formatTime(departure_time)}</DepTimeArrTime>
                <DestArrName>
                  {origin}, {"\r\n"}
                  {origin_name}
                </DestArrName>
                <DestArrDate>{formatDate(departure_date)}</DestArrDate>
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
                <DestArrDate>{formatDate(arrival_date)}</DestArrDate>
              </Container>
            </DepDescriptionWrapper>
          </Ticket>
        );
      }
    );
  };
  return (
    <TicketListWrapper>
      {isFetched && renderFlighs()}
      {!isFetched && null}
    </TicketListWrapper>
  );
}
//// Container ////
function getVisibleTickets(tickets, stops) {
  const stopz = Object.values(stops);
  const elems = new Set(stopz);
  if (!tickets) return;
  return tickets
    .filter(el => elems.has(el.stops))
    .sort((a, b) => a.price - b.price);
}
function mapStateToProps(state) {
  const { tickets, isFetched } = state.tickets;
  const { stops } = state;
  const { rate } = state.currency;
  const { activeCurr } = state.currency;
  return {
    tickets: getVisibleTickets(tickets, stops),
    rate,
    activeCurr,
    isFetched
  };
}

export default connect(
  mapStateToProps,
  { getTicketsRequest }
)(FlighList);
