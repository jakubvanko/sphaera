import QRCode from "qrcode.react";
import React from "react";

import {ContainerSpaceBetween} from "../Container";
import {CircleIcon} from "../Icon";
import {HeadingMedium, TextBig, TextLabeled} from "../TextType";
import {
    Container,
    InformationContainer,
    CodeContainer,
    IconContainer
} from "./Ticket.styled";

export const Ticket = ({artist, date, seat, price, qrValue, bottomIcon}) => (
    <Container>
        <ContainerSpaceBetween>
            <HeadingMedium>
                {artist}
            </HeadingMedium>
            <IconContainer>
                <CircleIcon size={40} name={"ticket"}/>
            </IconContainer>
        </ContainerSpaceBetween>
        <InformationContainer>
            <TextBig>
                {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
            </TextBig>
            <TextBig>
                {`${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`}
            </TextBig>
            <CodeContainer>
                <QRCode value={qrValue} size={64} renderAs={"svg"}/>
            </CodeContainer>
            <TextLabeled label={"Venue"}>
                SPHAERA
            </TextLabeled>
            <TextLabeled label={"Area"}>
                {seat}
            </TextLabeled>
        </InformationContainer>
        <ContainerSpaceBetween>
            {bottomIcon()}
            <HeadingMedium>
                ${price}
            </HeadingMedium>
        </ContainerSpaceBetween>
    </Container>
);

export default Ticket;
