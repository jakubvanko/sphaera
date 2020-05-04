import styled from "styled-components";

export const Container = styled.div``;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(8, 1fr);
  padding: 10vh 14vw;
  grid-row-gap: 8vh;
  justify-items: center;
  border-bottom: 1px solid var(--color-gray-8);

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto auto;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto auto;
    padding: 10vh 14vw 5vh 14vw;
  }
`;

export const BlackBanner = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 300px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 14vw;
`;

export const MainText = styled.div`
  text-align: center;
  font-size: 1.6em;
  font-weight: 600;
  color: black;
  line-height: 1.4em;

  @media only screen and (min-width: 992px) {
    line-height: normal;
  }
`;

export const BannerText = styled(MainText)`
  color: white;
`;

export const IconText = styled(MainText)`
  margin-bottom: 1vh;
  @media only screen and (min-width: 600px) {
    grid-column: 1 / span 2;
  }

  @media only screen and (min-width: 992px) {
    grid-column: 1 / span 4;
  }
`;

export const CorporateContainer = styled.div`
  padding: 8vh 10vw;
`;

export const CorporateLink = styled.a`
  color: var(--color-gray-2);
  text-decoration: underline;
  cursor: pointer;
`;
