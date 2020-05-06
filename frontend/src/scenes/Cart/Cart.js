import React from "react";
import { connect } from "react-redux";

import { ButtonSecondary } from "../../components/Button";
import { ContainerBordered } from "../../components/Container";
import { ItemImage } from "../../components/ItemImage";
import {
  HeadingMain,
  HeadingMedium,
  TextBasic,
} from "../../components/TextType";
import { Ticket } from "../../components/Ticket";
import {
  BuyButton,
  Container,
  ContainerSection,
  HeadingContainer,
  ItemContainer,
  PolicyInformationContainer,
} from "./Cart.styled";
import { buyRequest, removeItem } from "../../redux/actionCreators/cart";

const Cart = ({ items, buyPending, removeItem, buyRequest }) => {
  const totalPrice = items.reduce(
    (previousValue, currentValue) =>
      parseFloat(currentValue.price) + parseFloat(previousValue),
    0
  );

  return (
    <Container>
      <HeadingContainer>
        <HeadingMain>Cart</HeadingMain>
      </HeadingContainer>
      <ItemContainer>
        {items.map(({ image, artist, date, area, _id, price }, index) => (
          <React.Fragment key={_id + index}>
            <ItemImage $src={image} />
            <Ticket
              artist={artist}
              date={date}
              price={price}
              area={area}
              qrValue={_id}
              bottomIconText={"remove"}
              bottomIconName={"delete"}
              onBottomIconClick={() => removeItem({ _id }, area)}
            />
          </React.Fragment>
        ))}
        <ContainerBordered>
          <PolicyInformationContainer>
            By making a purchase, you agree to our Terms & Conditions. You can
            request a cashback in the 14 days following the purchase of all
            Sphaera tickets and additional goods associated with the advertised
            events.
            <ButtonSecondary>Terms & Conditions</ButtonSecondary>
          </PolicyInformationContainer>
        </ContainerBordered>
        <ContainerBordered>
          <ContainerSection>
            <HeadingMedium>Total</HeadingMedium>
          </ContainerSection>
          <ContainerSection>
            <TextBasic>Tickets ({items.length}x)</TextBasic>
            <TextBasic $align={"right"}>${totalPrice.toFixed(2)}</TextBasic>
            <TextBasic>Tax (0%)</TextBasic>
            <TextBasic $align={"right"}>${(0.0).toFixed(2)}</TextBasic>
          </ContainerSection>
          <ContainerSection>
            <TextBasic>Amount due</TextBasic>
            <HeadingMedium>${(totalPrice + 0).toFixed(2)}</HeadingMedium>
            <BuyButton
              isLoading={buyPending}
              onClick={() => {
                buyRequest(items);
              }}
            >
              Buy
            </BuyButton>
          </ContainerSection>
        </ContainerBordered>
      </ItemContainer>
    </Container>
  );
};

export default connect(
  ({ cart }) => ({ items: cart.items, buyPending: cart.buyPending }),
  {
    removeItem,
    buyRequest,
  }
)(Cart);
