import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(100vh - var(--nav-height));
  grid-auto-rows: 100vh;
  
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const EventContainer = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${props => props.$src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-template-rows: min-content  min-content;
  padding: 3vh 0;
  
  :hover {
    background: url("${props => props.$src}") no-repeat top;
    background-size: cover;
  }
  
  @media screen and (min-width: 700px) {
    align-items: flex-end;
  }
`;

const TextBase = styled.div`
  color: white;
  text-align: center;
  user-select: none;
`;

export const ArtistText = styled(TextBase)`
  font-size: 1.6em;
  font-weight: 500;
`;

export const DateText = styled(TextBase)`
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  grid-row-gap: 1vh;
`;

export const AdditionalItemContainer = styled.div`
  grid-column: ${props => props.$spanStart} / -1;
`;
