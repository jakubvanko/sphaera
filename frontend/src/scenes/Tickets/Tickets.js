import React from "react";

import test1 from "./assets/test1.jpg";
import test2 from "./assets/test2.jpg";
import test3 from "./assets/test3.jpg";
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

const EVENTS = [
    {
        artist: "Marcus & Martinus",
        image: test3,
        date: new Date("December 17, 2020")
    }, {
        artist: "Nickelback",
        image: test2,
        date: new Date("July 1, 2025")
    }, {
        artist: "Lady Gaga",
        image: test1,
        date: new Date("April 25, 2026")
    }, {
        artist: "Nickelback",
        image: test2,
        date: new Date("July 1, 2021")
    }, {
        artist: "Lady Gaga",
        image: test1,
        date: new Date("April 26, 2021")
    }, {
        artist: "Lady Gaga",
        image: test1,
        date: new Date("April 25, 2026")
    }, {
        artist: "Nickelback",
        image: test2,
        date: new Date("July 1, 2021")
    }, {
        artist: "Lady Gaga",
        image: test1,
        date: new Date("April 26, 2021")
    }
];
EVENTS.sort((a, b) => a.date > b.date ? 1 : -1);

const Tickets = () => {
    useFullScroll();
    const [width] = useWindowDimensions();
    const columnAmount = width >= 1200 ? 3 : width >= 700 ? 2 : 1;
    const emptyColumns = 3 - (EVENTS.length % columnAmount) === 0 ? columnAmount : 3 - (EVENTS.length % columnAmount);
    const spanStart = Math.abs(emptyColumns - 4);

    return (
        <Container>
            {EVENTS.map(({artist, date, image}, index) => (
                <EventContainer $src={image} key={index}>
                    <Filter>
                        <TextContainer>
                            <ArtistText>
                                {artist}
                            </ArtistText>
                            <DateText>
                                {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
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

export default Tickets;
