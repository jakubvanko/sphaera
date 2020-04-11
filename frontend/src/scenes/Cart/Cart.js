import React from "react";

import {
    ItemContainer,
    ItemImage,
    Item,
    ItemHeader,
    DeleteContainer,
    TotalInformationContainer,
    BuyButton,
    PolicyInformationContainer
} from "./Cart.styled";
import Icon from "../../components/Icon/Icon";
import Text from "../../components/Text/Text";
import {ButtonSecondary} from "../../components/Button/Button";

import test2 from "../../scenes/Tickets/assets/test2.jpg";
import test3 from "../../scenes/Tickets/assets/test3.jpg";
import BasicContainer from "../../components/BasicContainer/BasicContainer";
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
        <BasicContainer heading={"Cart"}>
            <ItemContainer>
                {CART.map(({image, artist, date, seat, event, price}, index) => <React.Fragment key={event + index}>
                    <ItemImage $src={image}/>
                    <Ticket artist={artist} date={date} price={price} seat={seat} qrValue={event}
                            bottomIcon={() => (
                                <DeleteContainer>
                                    <Icon name={"delete"} width={20}/>
                                    remove
                                </DeleteContainer>)
                            }/>
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
        </BasicContainer>
    )
};

export default Cart;
