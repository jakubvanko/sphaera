import React from "react";

import {SEATS, VIEWBOX} from "../../scripts/constants/seats";
import {G, Text} from "./SeatSelection.styled";

const SeatSelection = ({onSeatSelected, onSeatHovered}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={VIEWBOX} width={"100%"}>
        {SEATS.map(({name, path, textTransform, fill, color, selectable = true}, index) => (
            <G key={name + index} onClick={() => {
                if (selectable && onSeatSelected) {
                    onSeatSelected(name)
                }
                if (selectable && onSeatHovered) {
                    onSeatHovered(name)
                }
            }} $selectable={selectable}>
                <path d={path} transform="translate(-16.7 -4.1)" fill={fill || "#AADE87"} stroke={"black"}/>
                <Text transform={textTransform} fill={color || "black"}>{name}</Text>
            </G>
        ))}
    </svg>
);

export default SeatSelection;
