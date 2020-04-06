import styled from "styled-components";
import Text from "../../components/Text/Text";
import {Form as FormikFormNoStyle} from "formik";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 8vw;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 5vh;
  align-items: center;
  justify-content: space-evenly;
  
  @media (min-width: 890px){
    grid-template-columns: auto auto;
    padding: 5vh 0;
  }
  
  @media (min-width: 950px){
    padding: 5vh 2vw;
  }
  
  @media (min-width: 1250px){
    padding: 5vh 5vw;
  }
  
  @media (min-width: 1400px){
    padding: 5vh 8vw;
  }
`;

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
  border-bottom: dashed 1px #b2b2b2;
  padding: 20px 25px;
  font-size: 2rem;
  @media (min-width: 500px){
    padding: 30px 40px;
  }
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

export const FormText = styled(Text)`
  font-size: 1.1em;
  
  @media (min-width: 500px){
    line-height: 1.6em;
  }
`;
