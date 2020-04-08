import React from "react";

import {Container, EventContainer, ArtistText, DateText, TextContainer} from "./Tickets.styled";
import test1 from "./assets/test1.jpg";
import test2 from "./assets/test2.jpg";
import test3 from "./assets/test3.jpg";
import hero from "./assets/hero.jpg";

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
    }, {
        artist: "Lady Gaga",
        image: test1,
        date: new Date("April 26, 2021")
    }
];
EVENTS.sort((a, b) => a.date > b.date ? 1 : -1);
const emptyColumns = EVENTS.length % 3;

const Tickets = () => {
    return (
        <Container>
            {EVENTS.map(({artist, date, image}, index) => (
                <EventContainer $src={image} key={index}>
                    <TextContainer>
                        <ArtistText>
                            {artist}
                        </ArtistText>
                        <DateText>
                            {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                        </DateText>
                    </TextContainer>
                </EventContainer>
            ))}
            <div columns={emptyColumns} src={hero}/>
        </Container>
    )
};

export default Tickets;
