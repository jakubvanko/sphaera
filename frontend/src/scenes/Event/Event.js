import React, {useState} from "react";
import {connect} from "react-redux";
import {ClockLoader} from "react-spinners";

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
import HoverBox from "./components/HoverBox";
import {addItem} from "../../redux/actionCreators/cart";
import {AREA_LAYOUT, AREA_VIEWBOX} from "../../scripts/constants/areaLayout";

const Event = ({event}) => {
    const [currentArea, setCurrentArea] = useState();

    if (!event) return <Container><ClockLoader/></Container>;

    const disabledAreas = {};
    event.areas.forEach(({name, reserved, capacity}) => {
        if (reserved >= capacity) disabledAreas[name] = true;
    });
    return (
        <Container>
            <HoverBox/>
            <SeatSelectionContainer>
                <SeatSelection layout={AREA_LAYOUT} viewbox={AREA_VIEWBOX} disabled={disabledAreas}
                               onSeatSelected={name => setCurrentArea(name)}/>
            </SeatSelectionContainer>
            <MenuContainer>
                <ItemImage $src={event.image}/>
                <DataContainer>
                    <ArtistHeading>{event.artist}</ArtistHeading>
                    <TextContainer>
                        <TextLabeled label={"Date"}>
                            {`${event.date.getDate()}.${event.date.getMonth() + 1}.${event.date.getFullYear()}`}
                        </TextLabeled>
                        <TextLabeled label={"Time"}>
                            {`${event.date.getHours()}:${event.date.getMinutes()} ${event.date.getHours() > 12 ? "PM" : "AM"}`}
                        </TextLabeled>
                        <TextLabeled label={"Area"}>
                            {currentArea || "Please choose an area"}
                        </TextLabeled>
                    </TextContainer>
                    <DropdownNumber/>
                    <ButtonPrimary onClick={() => {
                        addItem(event, currentArea);
                    }}>Add to cart</ButtonPrimary>
                </DataContainer>
            </MenuContainer>
        </Container>)
};

export default connect(({event}, {match}) =>
    ({event: event.events.find(({_id}) => _id === match.params.id)}), {addItem})(Event);
