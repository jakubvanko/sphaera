import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { URL_EVENT } from "../../scripts/constants/urls";
import useFullScroll from "../../scripts/hooks/useFullScroll";
import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";
import hero from "./assets/hero.jpg";
import {
  AdditionalItemContainer,
  AdditionalText,
  AdditionalTextContainer,
  ArtistText,
  Container,
  DateText,
  EventContainer,
  Filter,
  MainText,
  TextContainer,
} from "./Tickets.styled";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const Tickets = ({ events }) => {
  useFullScroll();
  const [width] = useWindowDimensions();
  const filteredEvents = events.filter(
    ({ date }) => Date.parse(date) > Date.now()
  );
  const columnAmount = width >= 1200 ? 3 : width >= 700 ? 2 : 1;
  const emptyColumns =
    3 - (filteredEvents.length % columnAmount) === 0
      ? columnAmount
      : 3 - (filteredEvents.length % columnAmount);
  const spanStart = Math.abs(emptyColumns - 4);

  filteredEvents.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <Container>
      {filteredEvents.map(({ _id, artist, date, image }, index) => (
        <EventContainer as={Link} $src={image} key={index} to={URL_EVENT + _id}>
          <Filter>
            <TextContainer>
              <ArtistText>{artist}</ArtistText>
              <DateText>{formatDate(date)}</DateText>
            </TextContainer>
          </Filter>
        </EventContainer>
      ))}
      <AdditionalItemContainer $spanStart={spanStart} $src={hero}>
        <AdditionalTextContainer $spanStart={spanStart}>
          <MainText $spanStart={spanStart}>Looking for more?</MainText>
          <AdditionalText $spanStart={spanStart}>
            Check back later for more marvelous celebrities and spectacular
            shows.
          </AdditionalText>
        </AdditionalTextContainer>
      </AdditionalItemContainer>
    </Container>
  );
};

export default connect(({ event }) => ({ events: event.events }))(Tickets);
