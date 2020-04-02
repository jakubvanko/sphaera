import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ContentContainer = styled.div`
  
`;

export const FlipCardsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 80px
`;

export const FlipCardFrontContainer = styled.div`
  background-color: ${props => props.$backgroundColor};
  background-image: ${props => props.$backgroundImage && `url("${props.$backgroundImage}")`};
  color: ${props => props.$color || "black"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  user-select: none;
  font-size: 1.8em;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  :hover {
    text-decoration: underline;
  }
`;

export const IconContainer = styled.div`
  align-self: flex-end;
`;

export const FlipCardBackContainer = styled.div`
  padding: 30px;
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 15px;
  background-color: ${props => props.$backgroundColor && props.$backgroundColor};
`;

export const ContactTitle = styled.h5`
`;

export const ContactName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
`;

export const ContactDataContainer = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 10px;
`;
