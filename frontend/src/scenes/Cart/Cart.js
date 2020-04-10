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
    DeleteContainer,
    TotalInformationContainer,
    BuyButton,
    PolicyInformationContainer
} from "./Cart.styled";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import Text from "../../components/Text/Text";
import {SecondaryButton} from "../../components/Button/Button";

import test2 from "../../scenes/Tickets/assets/test2.jpg";
import test3 from "../../scenes/Tickets/assets/test3.jpg";

const CART = [{
    artist: "Marcus & Martinus",
    date: new Date("December 17, 2020 12:25:41"),
    image: test3,
    seat: "1",
    price: "22.48",
    event: "4f48as4f9a4fas9f8asfasfevent55"
}, {
    artist: "Nickelback",
    date: new Date("December 17, 2020 12:25:41"),
    image: test2,
    seat: "1",
    price: "215.01",
    event: "4f4iohwnfnaiosfjpasfjsfevent55"
}];

const Cart = () => {
    const totalPrice = CART.reduce((previousValue, currentValue) =>
        (parseFloat(currentValue.price) + parseFloat(previousValue)), 0);
    const tax = totalPrice * 0.2;

    return (
        <Container>
            <HeadingContainer>
                <Heading type={"main"}>Cart</Heading>
            </HeadingContainer>
            <ItemContainer>
                {CART.map(({artist, date, image, seat, event, price}) => <>
                    <ItemImage $src={image}/>
                    <Item $ticket>
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
                <Item>
                    <PolicyInformationContainer>
                        By purchasing a ticket, you agree to our Terms & Conditions. You can request a cashback in the
                        14 day following the purchase of all Sphaera tickets and additional goods associated with the
                        advertised events.
                        <SecondaryButton>Terms & Conditions</SecondaryButton>
                    </PolicyInformationContainer>
                </Item>
                <Item>
                    <ItemHeader>Total</ItemHeader>
                    <TotalInformationContainer>
                        <Text>Tickets ({CART.length}x)</Text>
                        <Text $align={"right"}>${totalPrice.toFixed(2)}</Text>
                        <Text>Tax (20%)</Text>
                        <Text $align={"right"}>${tax.toFixed(2)}</Text>
                    </TotalInformationContainer>
                    <ItemHeader>
                        <Text>Amount due</Text>
                        ${(totalPrice + tax).toFixed(2)}
                        <BuyButton>Buy</BuyButton>
                    </ItemHeader>
                </Item>
            </ItemContainer>
        </Container>
    )
};

export default Cart;
