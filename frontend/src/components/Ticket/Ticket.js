import React from "react";

import Icon from "../Icon/Icon";
import QRCode from "qrcode.react";
import {
    TicketContainer,
    InformationContainer,
    CodeContainer,
    SmallTextLabel,
    BigText,
    IconContainer,
    TicketHeading
} from "./Ticket.styled";

export const Ticket = ({artist, date, seat, price, qrValue, bottomIcon}) => (
    <TicketContainer>
        <TicketHeading>
            {artist}
            <IconContainer>
                <Icon name={"ticket"} width={24}/>
            </IconContainer>
        </TicketHeading>
        <InformationContainer>
            <BigText>
                {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
            </BigText>
            <BigText>
                {`${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`}
            </BigText>
            <CodeContainer>
                <QRCode value={qrValue} size={64} renderAs={"svg"}/>
            </CodeContainer>
            <div>
                <SmallTextLabel>
                    Venue
                </SmallTextLabel>
                SPHAERA
            </div>
            <div>
                <SmallTextLabel>
                    Area
                </SmallTextLabel>
                {seat}
            </div>
        </InformationContainer>
        <TicketHeading>
            {bottomIcon()}
            ${price}
        </TicketHeading>
    </TicketContainer>
);

export default Ticket;
