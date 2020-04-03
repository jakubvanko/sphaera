import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 8vw;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  width: 35vw;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 20px;
  padding: 25px 30px 30px 30px;
`;

export const FormHeader = styled.h4`
  width: 100%;
  border-bottom: dashed 1px #b2b2b2;
  padding: 30px;
  font-size: 2rem;
`;

export const FormContainer = styled.div`
  border: solid 1px rgb(198, 198, 198);
  border-radius: 4px;
`;

export const Button = styled.button`
  border: none;
  background-color: rgb(8, 12, 17);
  color: white;
  cursor: pointer;
  padding: 15px 0;
  font-weight: 600;
  display: inline-block;
  border-radius: 2px;
  width: 100%;
  user-select: none;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1px;
  
  :disabled {
    opacity: 0.5;
  }
`;

export const AdditionalText = styled.div`
  cursor: pointer;
  user-select: none;
  color: gray;
  font-size: 16px;
`;
