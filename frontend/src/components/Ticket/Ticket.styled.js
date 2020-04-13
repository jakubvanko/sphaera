import styled from "styled-components";

export const Container = styled.div`
  border: solid 1px var(--color-gray-8);
  border-radius: 4px;
  position: relative;
  
  > div {
    padding: 2vh 4vw;
    grid-row-gap: 10px;

    @media screen and (min-width: 500px){
      padding: 4vh 6vw;
      grid-row-gap: 20px;
    }
  
    @media (min-width: 1000px) {
      padding: 4vh 4vw 4vh 4vw;
    }
    
    :not(:first-child) {
      border-top: dashed 1px var(--color-gray-7);
    }
  }
  
  // The Ticket circle cut-out
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

export const IconContainer = styled.div`
  display: none;
  @media screen and (min-width: 450px){
    display: flex;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  
  @media screen and (min-width: 450px){
    grid-template-columns: max-content max-content max-content;
    grid-template-areas: "text text code" "text text code";
  }
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
