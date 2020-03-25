import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0;
    border: none;
    outline: none;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    display: ${props => props.$display && props.$display};
    align-self: center;
    
    svg {
        display: block;
        :hover {
            fill: ${props => props.$hoverFill && props.$hoverFill};
            stroke: ${props => props.$hoverStroke && props.$hoverStroke};
        }
    }
`;
