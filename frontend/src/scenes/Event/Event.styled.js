import styled from "styled-components";
import { ContainerBordered } from "../../components/Container";
import { ItemImage } from "../../components/ItemImage";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  grid-template-rows: auto auto;
  justify-items: center;
  padding: 7vh 0;
  grid-row-gap: 50px;

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const SeatSelectionContainer = styled.div`
  width: 90vw;

  @media screen and (min-width: 700px) {
    width: 75vw;
  }

  @media screen and (min-width: 900px) {
    width: 55vw;
  }

  @media screen and (min-width: 1000px) {
    width: 53vw;
  }

  @media screen and (min-width: 1100px) {
    width: 50vw;
  }

  @media screen and (min-width: 1350px) {
    width: 44vw;
  }
`;

export const DataContainer = styled(ContainerBordered)`
  display: grid;
  align-items: center;
  grid-column-gap: 20px;
  grid-template-areas: "heading" "text" "amount" "button";
  grid-template-columns: 1fr;
  grid-template-rows: none !important;
  padding: 30px 30px;
  grid-row-gap: 20px;

  button {
    grid-area: button;
  }

  @media screen and (min-width: 450px) {
    grid-row-gap: 10px;
    padding: 30px 40px;
    grid-template-areas: "heading heading heading" "text text text" "amount button button";
    grid-template-columns: 2fr 3fr 3fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-areas: "heading" "text" "amount" "button";
    grid-template-columns: 1fr;
    grid-template-rows: none !important;
    padding: 10px 30px 10px 30px;
    grid-row-gap: 10px;
  }

  @media screen and (min-width: 1350px) {
    grid-template-areas: "heading heading heading" "text text text" "amount button button";
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 3fr 3fr;
  }
`;

export const StyledItemImage = styled(ItemImage)`
  display: none !important;

  @media (min-width: 1350px) {
    display: block !important;
  }
`;

export const MenuContainer = styled.div`
  flex-direction: column;
  width: 90vw;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 700px) {
    width: 75vw;
  }

  @media screen and (min-width: 900px) {
    width: 33vw;
    height: 58vh;
  }

  @media screen and (min-width: 1350px) {
    grid-template-rows: 1fr 1fr;
    width: 39vw;
  }

  @media screen and (min-width: 1500px) {
    width: 35vw;
  }
`;

export const ArtistHeading = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  grid-area: heading;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 450px) {
    grid-area: text;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 1350px) {
    display: flex;
    justify-content: space-between;
    padding: 0 50px 12px 10px;
  }
`;
