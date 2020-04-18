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
  background: url("${props => props.$src}");
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
  
  
  @media screen and (min-width: 700px) {
    align-items: flex-end;
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3vh 0;
  transition: background-color 0.2s;
  display: flex;
  align-items: flex-end;
  
  :hover {
    background-color: transparent;
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
  width: 100%;
  display: grid;
  align-items: flex-end;
  grid-template-rows: min-content min-content;
  grid-template-columns: auto;
  grid-row-gap: 1vh;
`;

export const AdditionalItemContainer = styled(EventContainer)`
  padding: 3vh 0;
  grid-column: ${props => props.$spanStart} / -1;
  background: linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("${props => props.$src}") no-repeat top !important;
  cursor: default;
  display: flex;
  justify-content: flex-start;
  align-items: center !important;
`;


export const AdditionalTextContainer = styled.div`
  user-select: none;
  color: white;
  padding: 50px 7vw 0 7vw;
  @media only screen and (min-width: ${props => 1000 + (props.$spanStart - 1) * 350}px) {
    padding: 50px 0 0 14vw;
    line-height: 4em;
  }
`;

export const MainText = styled.div`
  font-weight: 900;
  font-size: 2.4em;
  letter-spacing: 1px;
  line-height: 1.3em;
  padding: 0 0 10px 0;
  
  @media only screen and (min-width: 400px) {
    font-size: 2.8em;
  }
  
  @media only screen and (min-width: 550px) {
    font-size: 3.1em;
  }
  
  @media only screen and (min-width: ${props => 350 + (props.$spanStart - 1) * 350}px) {
    font-size: 2.4em;
  }
  @media only screen and (min-width: ${props => 700 + (props.$spanStart - 1) * 350}px) {
    font-size: 3.5em;
    line-height: 1.2em;
    text-align: left;
    padding-top: 0;
  }
  @media only screen and (min-width: ${props => 1200 + (props.$spanStart - 1) * 350}px) {
    font-size: 7vw;
  }
`;

export const AdditionalText = styled.div`
  font-size: 1em;
  line-height: 1.6em;
  font-weight: 600;
  @media only screen and (min-width:  ${props => 700 + (props.$spanStart - 1) * 350}px) {
    text-align: left;
    line-height: 1.4em;
    font-size: 1.1em;
  }
`;
