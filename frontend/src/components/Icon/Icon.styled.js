import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: ${(props) => props.$padding || 0};
  border: none;
  outline: none;
  grid-area: ${(props) => props.$gridArea && props.$gridArea};
  display: ${(props) => props.$display && props.$display};
  align-self: center;

  svg {
    display: block;
    fill: ${(props) => props.$fill && props.$fill};
    stroke: ${(props) => props.$stroke && props.$stroke};
  }
`;

export const TextIconContainer = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4px;
  align-items: flex-end;
`;

export const CircleIconContainer = styled.div`
  background-color: ${(props) => props.$backgroundColor || "black"};
  border-radius: 100vw;
  width: ${(props) => props.$size || "40"}px;
  height: ${(props) => props.$size || "40"}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
