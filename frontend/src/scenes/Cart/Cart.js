import React from "react";

import {
    Container,
    HeadingContainer,
    ItemContainer,
    ItemImage,
    Item,
    ItemHeader,
    TotalInformationContainer,
    BuyButton,
    PolicyInformationContainer
} from "./Cart.styled";
import {TextIcon} from "../../components/Icon/Icon";
import {TextBasic, HeadingMain} from "../../components/TextTypes";
import {ButtonSecondary} from "../../components/Button";

import test2 from "../../scenes/Tickets/assets/test2.jpg";
import test3 from "../../scenes/Tickets/assets/test3.jpg";
import Ticket from "../../components/Ticket/Ticket";

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
                <HeadingMain>Cart</HeadingMain>
            </HeadingContainer>
            <ItemContainer>
                {CART.map(({image, artist, date, seat, event, price}, index) => <React.Fragment key={event + index}>
                    <ItemImage $src={image}/>
                    <Ticket artist={artist} date={date} price={price} seat={seat} qrValue={event}
                            bottomIcon={() => <TextIcon text={"remove"} name={"delete"}/>}/>
                </React.Fragment>)}
                <Item>
                    <PolicyInformationContainer>
                        By making a purchase, you agree to our Terms & Conditions. You can request a cashback in the
                        14 days following the purchase of all Sphaera tickets and additional goods associated with the
                        advertised events.
                        <ButtonSecondary>Terms & Conditions</ButtonSecondary>
                    </PolicyInformationContainer>
                </Item>
                <Item>
                    <ItemHeader>Total</ItemHeader>
                    <TotalInformationContainer>
                        <TextBasic>Tickets ({CART.length}x)</TextBasic>
                        <TextBasic $align={"right"}>${totalPrice.toFixed(2)}</TextBasic>
                        <TextBasic>Tax (20%)</TextBasic>
                        <TextBasic $align={"right"}>${tax.toFixed(2)}</TextBasic>
                    </TotalInformationContainer>
                    <ItemHeader>
                        <TextBasic>Amount due</TextBasic>
                        ${(totalPrice + tax).toFixed(2)}
                        <BuyButton>Buy</BuyButton>
                    </ItemHeader>
                </Item>
            </ItemContainer>
        </Container>
    )
};

export default Cart;
