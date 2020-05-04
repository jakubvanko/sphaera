import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--color-shell);
  width: 100vw;
  max-width: 100%;
  min-height: 100px;
  padding: 5vh 0;
  display: grid;
  justify-items: center;
  grid-template-rows: auto auto auto;
  grid-row-gap: 30px;

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-row-gap: 26px;
  grid-column-gap: 40px;

  @media only screen and (min-width: 470px) {
    grid-template-columns: repeat(6, min-content);
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: min-content min-content min-content;
    grid-template-rows: min-content min-content;
  }
`;

export const LinksContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 992px) {
    width: 50vw;
  }
`;

export const SmallLink = styled.a`
  font-weight: 600;
  padding: 10px 20px;
  cursor: pointer;
`;

export const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightText = styled(SmallLink)`
  color: var(--color-gray-4);
  padding: 0;
  @media only screen and (min-width: 992px) {
    padding: 10px 20px;
  }
`;
