import React from "react";

import {G, Text} from "./SeatSelection.styled";

const SeatSelection = ({layout, disabled = {}, viewbox, onSeatSelected, onSeatHovered}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} width={"100%"}>
        {layout.map(({name, path, textTransform, fill, color, selectable = true}, index) => (
            <G key={name + index}
               onClick={() => (selectable && !disabled[name] && onSeatSelected) && onSeatSelected(name)}
               onHover={() => (selectable && !disabled[name] && onSeatHovered) && onSeatHovered(name)}
               $selectable={selectable && !disabled[name]} $disabled={disabled[name]}>
                <path d={path} transform="translate(-16.7 -4.1)" fill={fill || "#AADE87"} stroke={"black"}/>
                <Text transform={textTransform} fill={color || "black"}>{name}</Text>
            </G>
        ))}
    </svg>
);

export default SeatSelection;
