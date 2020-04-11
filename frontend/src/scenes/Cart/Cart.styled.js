import styled from "styled-components";
import {Button} from "../../components/Button/Button";
import shapes from "./assets/shapes.png";

export const ItemContainer = styled.div`
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 2vh;
  
  @media (min-width: 1000px) {
    grid-template-columns: 7fr 19fr;
  } 
  
  @media screen and (min-width: 1150px){
    padding: 0 4.5vw;
  }
`;

export const ItemImage = styled.div`
  background-image: url("${props => props.$src}");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: none;
  
  @media (min-width: 1000px) {
    display: block;
  } 
`;

export const Item = styled.div`
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
      display: ${props => props.$ticket ? "block" : "none"};
    }
  }
`;

const ItemSectionBase = styled.div`
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

export const ItemHeader = styled(ItemSectionBase)`
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

export const DeleteContainer = styled.div`
  font-size: 0.8rem;
  text-transform: none;
  cursor: pointer;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 4px;
  align-items: flex-end;
`;

export const TotalInformationContainer = styled(InformationContainer)`
  margin: 0 4vw 0 4vw;
  padding-left: 0 !important;
  padding-right: 0 !important;
  border-top-style: solid;
  border-bottom-style: solid;
  grid-template-columns: max-content max-content !important;
  grid-template-areas: unset !important;
`;

export const BuyButton = styled(Button)`
  grid-column: 1 / -1
`;

export const PolicyInformationContainer = styled(ItemSectionBase)`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5em;
  text-align: center;
  width: 100%;
  height: 100%;
  background: url("${shapes}");
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 18px;
  
  @media (min-width: 1000px) {
    padding: 3vh 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } 
`;
