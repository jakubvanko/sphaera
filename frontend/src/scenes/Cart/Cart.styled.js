import styled from "styled-components";

import shapes from "./assets/shapes.png";
import { ButtonPrimaryLoader } from "../../components/Button";
import { ContainerSpaceBetween } from "../../components/Container";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 5vw;
  @media screen and (min-width: 1350px) {
    padding: 7vh 9vw;
  }

  @media screen and (min-width: 1500px) {
    padding: 9vh 12vw;
  }
`;

export const HeadingContainer = styled.div`
  padding-bottom: 3.5vh;
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 2vh;

  @media (min-width: 1000px) {
    grid-template-columns: 7fr 19fr;
  }

  @media screen and (min-width: 1150px) {
    padding: 0 4.5vw;
  }
`;

export const ContainerSection = styled(ContainerSpaceBetween)`
  width: calc(100% - 8vw);
  margin: 0 4vw;
  padding: 2vh 0;
  grid-row-gap: 10px;

  @media screen and (min-width: 500px) {
    width: calc(100% - 12vw);
    margin: 0 6vw;
    padding: 4vh 0;
    grid-row-gap: 20px;
  }

  @media (min-width: 1000px) {
    width: calc(100% - 8vw);
    margin: 0 4vw;
    padding: 4vh 0;
  }

  :not(:first-child) {
    border-top: solid 1px var(--color-gray-7);
  }
`;

export const BuyButton = styled(ButtonPrimaryLoader)`
  grid-column: 1 / -1;
`;

export const PolicyInformationContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5em;
  text-align: center;

  padding: 2vh 4vw;

  @media screen and (min-width: 500px){
    padding: 4vh 6vw;
    grid-row-gap: 20px;
  }
  
  @media (min-width: 1000px) {
    padding: 4vh 4vw 4vh 4vw;
  }
  
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
