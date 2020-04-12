import styled from "styled-components";

export const TicketContainer = styled.div`
  border: solid 1px var(--color-gray-8);
  border-radius: 4px;
  position: relative;
  :after {
    content: " ";
    position: absolute;
    top: calc(50% - 21px);
    right: -1px;
    width: 20px;
    height: 40px;
    background-color: white;
    border-top-left-radius: 1100px;
    border-bottom-left-radius: 1100px;
    border: 1px solid var(--color-gray-8);
    border-right: 0;
    display: none;
    
    @media screen and (min-width: 500px){
      display: block;
    }
  }
`;

export const ItemSectionBase = styled.div`
  padding: 2vh 4vw;
  grid-row-gap: 10px;

  @media screen and (min-width: 500px){
    padding: 4vh 6vw;
    grid-row-gap: 20px;
  }
  
  @media (min-width: 1000px) {
    padding: 4vh 4vw 4vh 4vw;
  } 
`;

export const TicketHeading = styled(ItemSectionBase)`
  width: 100%;
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: 600;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (min-width: 500px){
    font-size: 2.4rem;
  }
`;

export const IconContainer = styled.div`
  background-color: black;
  border-radius: 100vw;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: none;
  @media screen and (min-width: 450px){
    display: flex;
  }
`;

export const InformationContainer = styled(ItemSectionBase)`
  display: grid;
  justify-content: space-between;
  border-bottom: dashed 1px var(--color-gray-7);
  border-top: dashed 1px var(--color-gray-7);
  grid-template-columns: 1fr 1fr;
  
  @media screen and (min-width: 450px){
    grid-template-columns: max-content max-content max-content;
    grid-template-areas: "text text code" "text text code";
  }
`;

export const BigText = styled.div`
  font-weight: 600;
  font-size: 1.3em;
`;

export const SmallTextLabel = styled.div`
  color: var(--color-gray-5);
  font-size: 0.85em;
  padding-bottom: 5px;
`;

export const CodeContainer = styled.div`
  grid-area: code;
  align-self: center;
  justify-self: flex-end;
  display: none;
  @media screen and (min-width: 450px){
    display: block;
  }
`;
