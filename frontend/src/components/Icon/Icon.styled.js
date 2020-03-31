import styled from "styled-components";

export const Container = styled.button`
    cursor: pointer;
    background-color: transparent;
    padding: ${props => props.$padding || 0};
    border: none;
    outline: none;
    grid-area: ${props => props.$gridArea && props.$gridArea};
    display: ${props => props.$display && props.$display};
    align-self: center;
    
    svg {
        display: block;
        fill: ${props => props.$fill && props.$fill};
        stroke: ${props => props.$stroke && props.$stroke};
    }
`;
