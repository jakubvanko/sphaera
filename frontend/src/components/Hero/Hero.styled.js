import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 53vw;
  position: relative;
  
  @media only screen and (min-width: 700px) {
    height: calc(100vh - var(--nav-height) + 5px);
    overflow: hidden;
    display: flex;
    align-items: center;
  }
`;

export const GraphicContent = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const TextContainer = styled.div`
  color: white;
  position: absolute;
  padding: 0 40px;

  @media only screen and (min-width: 600px) {
    padding: 50px 0 0 10vw;
  }
  
  @media only screen and (min-width: 1000px) {
    padding: 50px 0 0 15vw;
    line-height: 4em;
  }
`;

export const MainText = styled.div`
  font-weight: bolder;
  font-size: 2.5em;
  user-select: none;
  letter-spacing: 1px;
  line-height: 1.2em;
  padding: 100px 0 10px 0;
  text-align: center;
  
  @media only screen and (min-width: 600px) {
    font-size: 4em;
    text-align: left;
    padding-top: 0;
  }
`;

export const AdditionalText = styled.div`
  font-size: 1.3em;
  line-height: 1.4em;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 600px) {
    text-align: left;
  }
`;
