import React from "react";
import {connect} from "react-redux";

import hero from "./assets/hero.jpg";
import useFullScroll from "../../scripts/hooks/useFullScroll";
import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";
import {
    Container,
    EventContainer,
    ArtistText,
    DateText,
    TextContainer,
    AdditionalItemContainer,
    AdditionalText,
    AdditionalTextContainer,
    MainText,
    Filter
} from "./Tickets.styled";

const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
};

const Tickets = ({events}) => {
    useFullScroll();
    const [width] = useWindowDimensions();
    const filteredEvents = events.filter(({date}) => Date.parse(date) > Date.now());
    const columnAmount = width >= 1200 ? 3 : width >= 700 ? 2 : 1;
    const emptyColumns = 3 - (filteredEvents.length % columnAmount) === 0 ?
        columnAmount : 3 - (filteredEvents.length % columnAmount);
    const spanStart = Math.abs(emptyColumns - 4);

    filteredEvents.sort((a, b) => a.date > b.date ? 1 : -1);

    return (
        <Container>
            {filteredEvents.map(({artist, date, image}, index) => (
                <EventContainer $src={"https://sphaera.jakubvanko.com/api/uploads/" + image} key={index}>
                    <Filter>
                        <TextContainer>
                            <ArtistText>
                                {artist}
                            </ArtistText>
                            <DateText>
                                {formatDate(date)}
                            </DateText>
                        </TextContainer>
                    </Filter>
                </EventContainer>
            ))}
            <AdditionalItemContainer $spanStart={spanStart} $src={hero}>
                <AdditionalTextContainer $spanStart={spanStart}>
                    <MainText $spanStart={spanStart}>
                        Looking for more?
                    </MainText>
                    <AdditionalText $spanStart={spanStart}>
                        Check back later for more marvelous celebrities and spectacular shows.
                    </AdditionalText>
                </AdditionalTextContainer>
            </AdditionalItemContainer>
        </Container>
    )
};

export default connect(({event}) => ({events: event.events}))(Tickets);
