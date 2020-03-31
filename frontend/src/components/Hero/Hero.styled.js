import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  position: relative;
  
  @media only screen and (min-width: 600px) {
    height: calc(100vh - var(--nav-height) + 5px);
    overflow: hidden;
    display: flex;
    align-items: center;
  }
`;

export const GraphicContent = styled.div`
  width: 100%;
  height: 69vw;
  object-fit: cover;
  object-position: center;
  @media only screen and (min-width: 600px) {
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  color: black;
  padding: 25px 30px;
  
  @media only screen and (min-width: 600px) {
    position: absolute;
    color: white;
  }
  
  @media only screen and (min-width: 750px) {
    padding: 50px 0 0 7vw;
  }
  
  @media only screen and (min-width: 1000px) {
    padding: 50px 0 0 14vw;
    line-height: 4em;
  }
`;

export const MainText = styled.div`
  font-weight: 900;
  font-size: 2.8em;
  user-select: none;
  letter-spacing: 1px;
  line-height: 1.3em;
  padding: 0 0 10px 0;
  
  @media only screen and (min-width: 600px) {
    font-size: 3.1em;
    line-height: 1.2em;
    text-align: left;
    padding-top: 0;
  }
  
  @media only screen and (min-width: 800px) {
    font-size: 4em;
  }
  
  @media only screen and (min-width: 1400px) {
    font-size: ${props => props.$big && "7vw"};
  }
`;

export const AdditionalText = styled.div`
  font-size: 1.4em;
  line-height: 1.6em;
  font-weight: 600;
  @media only screen and (min-width: 600px) {
    text-align: left;
    line-height: 1.4em;
    font-size: ${props => props.$small && "1.1em"};
  }
`;
