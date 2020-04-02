import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ContentContainer = styled.div`
  
`;

export const FlipCardsContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  
  @media(min-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media(min-width: 730px) {
    margin: 0 8vw;
  }
  
  @media(min-width: 950px) {
    margin: 0 10vw;
  }
  
  @media(min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
  }
  
  @media(min-width: 1500px) {
    margin: 0 5vw;
  }
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

export const ContactName = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5em;
`;
