import styled from "styled-components";

export const Form = styled.form`
  width: 80vw;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 20px;
  padding: 15px 25px 25px 25px;
  
  @media (min-width: 500px){
    padding: 25px 40px 40px 40px;
  }
  
  @media (min-width: 890px){
    width: 45vw;
  }
  
  @media (min-width: 900px){
    width: 43vw;
  }
  
  @media (min-width: 1100px){
    width: 39vw;
  }
  
  @media (min-width: 1400px){
    width: 35vw;
  }
`;

export const FormHeader = styled.h4`
  width: 100%;
  border-bottom: dashed 1px var(--color-gray-7);
  padding: 20px 25px;
  font-size: 2rem;
  text-transform: capitalize;
  @media (min-width: 500px){
    padding: 30px 40px;
  }
`;
