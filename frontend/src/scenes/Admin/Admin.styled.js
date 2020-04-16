import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MultiColumnForm = styled.form`
  width: 90vw;
  display: grid;
  grid-gap: 20px;
  padding: 15px 25px 25px 25px;
  
  @media (min-width: 500px){
    padding: 25px 40px 40px 40px;
  }
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: "artist seats" "date seats" "file seats" "button button";
`;

export const SeatInputContainer = styled.div`
  display: grid;
  grid-area: seats;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;
