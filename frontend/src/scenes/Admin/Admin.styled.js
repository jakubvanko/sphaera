import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 5vw;
`;

export const MultiColumnForm = styled.form`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  padding: 15px 25px 25px 25px;
  
  @media (min-width: 500px){
    padding: 25px 40px 40px 40px;
  }
`;

export const AreaInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 100px;
  
  @media screen and (min-width: 1100px) {
    grid-template-columns: 2fr 3fr;
  }
`;

export const AreaInputGroup = styled.div`
  display: ${props => props.$displayed ? "grid" : "none"};
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: 30px;
  
  @media screen and (min-width: 1100px) {
    padding: 5px;
  }
`;
