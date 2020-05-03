import React from "react";

import {ContainerSpaceBetween} from "../Container";
import {TextIcon} from "../Icon";
import {HeadingMedium, TextBig, TextLabeled} from "../TextType";
import {
    Container,
    InformationContainer,
    Code,
    StyledCircleIcon
} from "./Ticket.styled";

export const Ticket = ({artist, date, seat, price, qrValue, bottomIconText, bottomIconName, onBottomIconClick}) => (
    <Container>
        <ContainerSpaceBetween>
            <HeadingMedium>
                {artist}
            </HeadingMedium>
            <StyledCircleIcon size={40} name={"ticket"}/>
        </ContainerSpaceBetween>
        <InformationContainer>
            <TextBig>
                {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
            </TextBig>
            <TextBig>
                {`${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`}
            </TextBig>
            <Code value={qrValue} size={64} renderAs={"svg"}/>
            <TextLabeled label={"Venue"}>
                SPHAERA
            </TextLabeled>
            <TextLabeled label={"Area"}>
                {seat}
            </TextLabeled>
        </InformationContainer>
        <ContainerSpaceBetween>
            <TextIcon text={bottomIconText} name={bottomIconName} onClick={onBottomIconClick}/>
            <HeadingMedium>
                ${price}
            </HeadingMedium>
        </ContainerSpaceBetween>
    </Container>
);

export default Ticket;
