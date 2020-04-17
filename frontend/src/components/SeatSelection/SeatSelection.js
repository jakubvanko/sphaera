import React from "react";
import styled from "styled-components";

import {SEATS, VIEWBOX} from "../../scripts/constants/seats";

const Text = styled.text`
  font-size: 5px;
  user-select: none;
`;

const G = styled.g`
  cursor: ${props => props.$selectable && "pointer"};
  
  :hover {
    opacity: ${props => props.$selectable && 0.5};;
  }
`;


const SeatSelection = ({onSeatSelected}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={VIEWBOX} width={"100%"}>
        {SEATS.map(({name, path, textTransform, fill, color, selectable = true}, index) => (
            <G key={name + index} onClick={() => {
                if (selectable && onSeatSelected) {
                    onSeatSelected(name)
                }
            }} $selectable={selectable}>
                <path d={path} transform="translate(-16.7 -4.1)" fill={fill || "#AADE87"} stroke={"black"}/>
                <Text transform={textTransform} fill={color || "black"}>{name}</Text>
            </G>
        ))}
    </svg>
);

export default SeatSelection;
