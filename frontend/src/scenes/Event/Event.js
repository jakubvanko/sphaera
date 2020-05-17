import React, { useState } from "react";
import { connect } from "react-redux";
import { ClockLoader } from "react-spinners";
import { animateScroll } from "react-scroll";

import {
  Container,
  AreaSelectionContainer,
  DataContainer,
  MenuContainer,
  ArtistHeading,
  TextContainer,
  StyledItemImage,
  StyledFormStatus,
} from "./Event.styled";
import { AreaSelection } from "../../components/AreaSelection";
import { ButtonPrimary } from "../../components/Button";
import { TextLabeled } from "../../components/TextType";
import DropdownNumber from "./components/DropdownNumber";
import HoverBox from "./components/HoverBox";
import { addItem } from "../../redux/actionCreators/cart";
import { AREA_LAYOUT, AREA_VIEWBOX } from "../../scripts/constants/areaLayout";
import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";

const Event = ({ event, addItem }) => {
  const [width] = useWindowDimensions();
  const [currentArea, setCurrentArea] = useState();
  const [currentHoveredArea, setCurrentHoveredArea] = useState();
  const [isPopupDisplayed, setPopupDisplayed] = useState(false);
  const [currentFill, setCurrentFill] = useState("pink");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [ticketAmountSelected, setTicketAmountSelected] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!event)
    return (
      <Container>
        <ClockLoader />
      </Container>
    );

  const disabledAreas = {};
  event.areas.forEach(({ name, reserved, capacity }) => {
    if (reserved >= capacity) disabledAreas[name] = true;
  });
  const currentHoveredAreaObject = event.areas.find(
    ({ name }) => name === currentHoveredArea
  );

  return (
    <Container
      onMouseMove={(event) => {
        if (event.screenX !== mouseX) setMouseX(event.screenX);
        if (event.screenY !== mouseY) setMouseY(event.screenY);
      }}
    >
      <HoverBox
        displayed={isPopupDisplayed}
        fill={currentFill}
        area={currentHoveredArea}
        price={currentHoveredArea && currentHoveredAreaObject.price}
        x={mouseX}
        y={mouseY}
        available={
          currentHoveredArea &&
          currentHoveredAreaObject.capacity - currentHoveredAreaObject.reserved
        }
      />
      <AreaSelectionContainer>
        <AreaSelection
          layout={AREA_LAYOUT}
          viewbox={AREA_VIEWBOX}
          disabled={disabledAreas}
          onAreaSelected={(name) => {
            setCurrentArea(name);
            if (width < 900) {
              animateScroll.scrollTo(100);
            }
            setAddedToCart(false);
          }}
          onAreaOver={(name, fill) => {
            setPopupDisplayed(true);
            setCurrentFill(fill);
            setCurrentHoveredArea(name);
          }}
          onAreaOut={() => setPopupDisplayed(false)}
        />
      </AreaSelectionContainer>
      <MenuContainer>
        <StyledItemImage $src={event.image} />
        <DataContainer>
          <ArtistHeading>{event.artist}</ArtistHeading>
          <TextContainer>
            <TextLabeled label={"Date"}>
              {`${event.date.getDate()}.${
                event.date.getMonth() + 1
              }.${event.date.getFullYear()}`}
            </TextLabeled>
            <TextLabeled label={"Time"}>
              {`${event.date.getHours()}:${event.date.getMinutes()} ${
                event.date.getHours() > 12 ? "PM" : "AM"
              }`}
            </TextLabeled>
            <TextLabeled label={"Area"}>
              {currentArea || "Please choose an area"}
            </TextLabeled>
          </TextContainer>
          <DropdownNumber
            onChange={({ value }) => setTicketAmountSelected(value)}
          />
          <ButtonPrimary
            disabled={!currentArea}
            onClick={() => {
              const currentAreaObject = event.areas.find(
                ({ name }) => name === currentArea
              );
              for (let i = 0; i < ticketAmountSelected; i++) {
                addItem(event, currentArea, currentAreaObject.price);
              }
              setAddedToCart(true);
            }}
          >
            Add to cart
          </ButtonPrimary>
          <StyledFormStatus
            success={addedToCart}
            successMessage={"Chosen tickets were added to cart"}
          />
        </DataContainer>
      </MenuContainer>
    </Container>
  );
};

export default connect(
  ({ event }, { match }) => ({
    event: event.events.find(({ _id }) => _id === match.params.id),
  }),
  { addItem }
)(Event);
