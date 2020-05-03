import React from "react";

import {G, Text} from "./SeatSelection.styled";

const SeatSelection = ({layout, disabled = {}, viewbox, onSeatSelected, onSeatOver, onSeatOut}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} width={"100%"}>
        {layout.map(({name, path, textTransform, fill = "#AADE87", color, selectable = true}, index) => (
            <G key={name + index}
               onClick={() => (selectable && !disabled[name] && onSeatSelected) && onSeatSelected(name, fill)}
               onMouseOver={() => (selectable && !disabled[name] && onSeatOver) && onSeatOver(name, fill)}
               onMouseOut={() => (selectable && !disabled[name] && onSeatOut) && onSeatOut(name, fill)}
               $selectable={selectable && !disabled[name]} $disabled={disabled[name]}>
                <path d={path} transform="translate(-16.7 -4.1)" fill={fill} stroke={"black"}/>
                <Text transform={textTransform} fill={color || "black"}>{name}</Text>
            </G>
        ))}
    </svg>
);

export default SeatSelection;
