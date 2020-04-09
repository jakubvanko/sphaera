import React from "react";

import {Container, HeadingContainer, ItemContainer, ItemImage, Item, ItemHeader, IconContainer} from "./Cart.styled";
import Heading from "../../components/Heading/Heading";
import test1 from "../../scenes/Tickets/assets/test1.jpg";
import test2 from "../../scenes/Tickets/assets/test2.jpg";
import test3 from "../../scenes/Tickets/assets/test3.jpg";
import Icon from "../../components/Icon/Icon";

const CART = [{
    artist: "Marcus & Martinus",
    date: new Date("December 17, 2020"),
    image: test3,
    seat: "1",
    price: "22.48"
}];

const Cart = () => (
    <Container>
        <HeadingContainer>
            <Heading type={"main"}>Test</Heading>
        </HeadingContainer>
        <ItemContainer>
            <ItemImage $src={test3}/>
            <Item>
                <ItemHeader>
                    Marcus & Martinus
                    <IconContainer>
                        <Icon name={"ticket"} width={24}/>
                    </IconContainer>
                </ItemHeader>
            </Item>
        </ItemContainer>
    </Container>
);

export default Cart;
