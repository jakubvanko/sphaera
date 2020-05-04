import styled from "styled-components";

export const ContainerSpaceBetween = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 2}, auto);
  justify-content: space-between;
  align-items: center;
  grid-row-gap: 10px;
  @media screen and (min-width: 500px) {
    grid-row-gap: 20px;
  }
`;

export const ContainerBordered = styled.div`
  border: solid 1px var(--color-gray-8);
  border-radius: 4px;
  position: relative;
  width: 100%;
`;
