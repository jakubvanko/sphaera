import styled from "styled-components";

export const Container = styled.div``;

export const ContentContainer = styled.div`
  padding: 0 30px 30px 30px;

  @media (min-width: 600px) {
    padding: 50px 100px;
  }

  @media (min-width: 1100px) {
    padding: 50px 180px;
  }
`;

export const SectionContainer = styled.section`
  padding-top: 40px;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 18px;
`;
