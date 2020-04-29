import React from "react";

import {
    Container,
    SeatSelectionContainer,
    DataContainer,
    MenuContainer,
    ArtistHeading,
    TextContainer
} from "./Event.styled";
import {SeatSelection} from "../../components/SeatSelection";
import {ButtonPrimary} from "../../components/Button";
import {ItemImage} from "../../components/ItemImage";
import {TextLabeled} from "../../components/TextType";
import DropdownNumber from "./components/DropdownNumber";
import test2 from "../Tickets/assets/test3.jpg";
import HoverBox from "./components/HoverBox";

const Event = () => (
    <Container>
        <HoverBox/>
        <SeatSelectionContainer>
            <SeatSelection/>
        </SeatSelectionContainer>
        <MenuContainer>
            <ItemImage $src={test2}/>
            <DataContainer>
                <ArtistHeading>Marcus & Martinus</ArtistHeading>
                <TextContainer>
                    <TextLabeled label={"Date"}>
                        21.04.2020
                    </TextLabeled>
                    <TextLabeled label={"Time"}>
                        12:14 PM
                    </TextLabeled>
                    <TextLabeled label={"Area"}>
                        Floor
                    </TextLabeled>
                </TextContainer>
                <DropdownNumber/>
                <ButtonPrimary>Add to cart</ButtonPrimary>
            </DataContainer>
        </MenuContainer>
    </Container>
);

export default Event;
