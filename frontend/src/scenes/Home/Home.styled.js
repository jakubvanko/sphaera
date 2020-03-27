import styled from "styled-components";

export const Container = styled.div`
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: calc(100vh - var(--nav-height) + 5px);
  max-height: 100%;
  overflow: hidden;
  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

export const Video = styled.video`
  height: calc(100vh - var(--nav-height) + 5px);
  z-index: -1;
  position: absolute;
  @media only screen and (min-width: 992px) {
    @media (max-aspect-ratio: 15/9) {
      height: 100%;
      max-width: unset;
      width: auto;
    }
    @media (min-aspect-ratio: 15/9) {
      width: 100vw;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const VideoText = styled.h1`
  font-weight: bolder;
  font-size: 2.5em;
  user-select: none;
  letter-spacing: 1px;
  line-height: 1.2em;
  padding: 100px 0 10px 0;
  color: white;
  text-align: center;
  
  @media only screen and (min-width: 600px) {
    color: white;
    font-size: 4em;
    text-align: left;
    padding-top: 0;
  }
`;

export const VideoDescription = styled.h3`
  color: white;
  font-size: 1.3em;
  line-height: 1.4em;
  font-weight: 600;
  text-align: center;
  @media only screen and (min-width: 600px) {
    text-align: left;
  }
`;

export const VideoTextContainer = styled.div`
  padding: 0 40px;

  @media only screen and (min-width: 600px) {
    padding: 50px 0 0 10vw;
  }
  
  @media only screen and (min-width: 1000px) {
    padding: 50px 0 0 15vw;
    line-height: 4em;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(8, 1fr);
  padding: 10vh 14vw;
  grid-row-gap: 8vh;
  justify-items: center;
  border-bottom: 1px solid rgb(198,198,198);
  
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
  color: #333;
  text-decoration: underline;
  cursor: pointer;
`;
