import styled from "styled-components";

import { TextBasic } from "../../components/TextType";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 8vw;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 5vh;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 890px) {
    grid-template-columns: auto auto;
    padding: 5vh 0;
  }

  @media (min-width: 950px) {
    padding: 5vh 2vw;
  }

  @media (min-width: 1250px) {
    padding: 5vh 5vw;
  }

  @media (min-width: 1400px) {
    padding: 5vh 8vw;
  }
`;

export const AdditionalText = styled.div`
  cursor: pointer;
  user-select: none;
  color: var(--color-gray-5);
  font-size: 16px;
`;

export const FormText = styled(TextBasic)`
  font-size: 1.1rem;

  @media (min-width: 500px) {
    line-height: 1.6em;
  }
`;
