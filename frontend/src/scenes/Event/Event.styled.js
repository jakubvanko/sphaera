import styled from "styled-components";
import { ContainerBordered } from "../../components/Container";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SeatSelectionContainer = styled.div`
  width: 44vw;
`;

export const DataContainer = styled(ContainerBordered)`
  display: grid;
  grid-template-areas: "heading heading heading" "text text text" "amount button button";
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 3fr 3fr;
  align-items: center;
  grid-row-gap: 10px;
  grid-column-gap: 20px;

  button {
    grid-area: button;
  }

  padding: 15px 25px 25px 25px;

  @media (min-width: 500px) {
    padding: 10px 30px 10px 30px;
  }
`;

export const MenuContainer = styled.div`
  flex-direction: column;
  width: 38vw;
  height: 58vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const ArtistHeading = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  grid-area: heading;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px 12px 10px;
  grid-area: text;
`;
