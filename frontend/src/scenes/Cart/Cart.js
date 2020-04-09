import React from "react";
import QRCode from "qrcode.react";

import {
    Container,
    HeadingContainer,
    ItemContainer,
    ItemImage,
    Item,
    ItemHeader,
    IconContainer,
    BigText,
    InformationContainer,
    SmallTextLabel,
    CodeContainer,
    DeleteContainer
} from "./Cart.styled";
import Heading from "../../components/Heading/Heading";
import test1 from "../../scenes/Tickets/assets/test1.jpg";
import test2 from "../../scenes/Tickets/assets/test2.jpg";
import test3 from "../../scenes/Tickets/assets/test3.jpg";
import Icon from "../../components/Icon/Icon";

const CART = [{
    artist: "Marcus & Martinus",
    date: new Date("December 17, 2020 12:25:41"),
    image: test3,
    seat: "1",
    price: "22.48",
    event: "4f48as4f9a4fas9f8asfasfevent55"
}];

const Cart = () => (
    <Container>
        <HeadingContainer>
            <Heading type={"main"}>Test</Heading>
        </HeadingContainer>
        <ItemContainer>
            {CART.map(({artist, date, image, seat, event, price}) => <>
                <ItemImage $src={image}/>
                <Item>
                    <ItemHeader>
                        {artist}
                        <IconContainer>
                            <Icon name={"ticket"} width={24}/>
                        </IconContainer>
                    </ItemHeader>
                    <InformationContainer>
                        <BigText>
                            {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                        </BigText>
                        <BigText>
                            {`${date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? "PM" : "AM"}`}
                        </BigText>
                        <CodeContainer>
                            <QRCode value={event} size={64} renderAs={"svg"}/>
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
                    <ItemHeader>
                        <DeleteContainer>
                            <Icon name={"delete"} width={20}/>
                            remove
                        </DeleteContainer>
                        ${price}
                    </ItemHeader>
                </Item>
            </>)}
        </ItemContainer>
    </Container>
);

export default Cart;
