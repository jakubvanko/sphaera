import React from "react";
import {connect} from "react-redux";

import {ButtonSecondary} from "../../components/Button";
import {ContainerBordered} from "../../components/Container";
import {ItemImage} from "../../components/ItemImage";
import {TextBasic, HeadingMain, HeadingMedium} from "../../components/TextType";
import {Ticket} from "../../components/Ticket";
import {
    Container,
    HeadingContainer,
    ItemContainer,
    BuyButton,
    PolicyInformationContainer,
    ContainerSection
} from "./Cart.styled";


const Cart = ({items}) => {
    const totalPrice = items.reduce((previousValue, currentValue) =>
        (parseFloat(currentValue.price) + parseFloat(previousValue)), 0);
    const tax = totalPrice * 0.2;

    return (
        <Container>
            <HeadingContainer>
                <HeadingMain>Cart</HeadingMain>
            </HeadingContainer>
            <ItemContainer>
                {items.map(({image, artist, date, seat, _id, price}, index) => <React.Fragment key={_id + index}>
                    <ItemImage $src={image}/>
                    <Ticket artist={artist} date={date} price={price} seat={seat} qrValue={_id}
                            bottomIconText={"remove"} bottomIconName={"delete"}/>
                </React.Fragment>)}
                <ContainerBordered>
                    <PolicyInformationContainer>
                        By making a purchase, you agree to our Terms & Conditions. You can request a cashback in the
                        14 days following the purchase of all Sphaera tickets and additional goods associated with
                        the
                        advertised events.
                        <ButtonSecondary>Terms & Conditions</ButtonSecondary>
                    </PolicyInformationContainer>
                </ContainerBordered>
                <ContainerBordered>
                    <ContainerSection>
                        <HeadingMedium>
                            Total
                        </HeadingMedium>
                    </ContainerSection>
                    <ContainerSection>
                        <TextBasic>Tickets ({items.length}x)</TextBasic>
                        <TextBasic $align={"right"}>${totalPrice.toFixed(2)}</TextBasic>
                        <TextBasic>Tax (20%)</TextBasic>
                        <TextBasic $align={"right"}>${tax.toFixed(2)}</TextBasic>
                    </ContainerSection>
                    <ContainerSection>
                        <TextBasic>Amount due</TextBasic>
                        <HeadingMedium>
                            ${(totalPrice + tax).toFixed(2)}
                        </HeadingMedium>
                        <BuyButton>Buy</BuyButton>
                    </ContainerSection>
                </ContainerBordered>
            </ItemContainer>
        </Container>
    )
};

export default connect(({cart}) => ({items: cart.items}))(Cart);
