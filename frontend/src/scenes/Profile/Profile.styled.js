import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding: 5vh 5vw;
  @media screen and (min-width: 1350px) {
    padding: 7vh 9vw;
  }

  @media screen and (min-width: 1500px) {
    padding: 9vh 12vw;
  }
`;

export const HeadingContainer = styled.div`
  padding-bottom: 3.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutText = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
`;

export const MainTextContainer = styled.div`
  font-size: 2rem;
  font-weight: 500;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 2vh;
  padding-bottom: 3vh;
`;

export const SmallText = styled.span`
  font-size: 0.9rem;
  font-weight: normal;
`;

export const Item = styled.div`
  border: solid 1px var(--color-gray-8);
  border-radius: 4px;

  > div:not(:last-child) {
    border-bottom: dashed 1px var(--color-gray-7);
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-column-gap: 1vw;
  grid-row-gap: 2vh;

  @media (min-width: 1000px) {
    grid-template-columns: 7fr 19fr;
  }

  @media screen and (min-width: 1150px) {
    padding: 0 4.5vw;
  }
`;

const ItemSectionBase = styled.div`
  padding: 2vh 4vw;
  grid-row-gap: 10px;

  @media screen and (min-width: 500px) {
    padding: 4vh 6vw;
    grid-row-gap: 20px;
  }

  @media (min-width: 1000px) {
    padding: 4vh 4vw 4vh 4vw;
  }
`;

export const ItemHeader = styled(ItemSectionBase)`
  width: 100%;
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: 600;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 500px) {
    font-size: 2.4rem;
  }
`;

export const AccountData = styled(ItemSectionBase)`
  display: grid;
  grid-template-columns: auto;
  @media screen and (min-width: 500px) {
    grid-template-columns: auto auto;
  }
`;

export const Form = styled(ItemSectionBase)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
`;
