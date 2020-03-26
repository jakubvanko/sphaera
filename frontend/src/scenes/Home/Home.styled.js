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
  padding: 100px 0 20px 0;
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
    line-height: 4em;
  }
  
  @media only screen and (min-width: 1000px) {
    padding: 50px 0 0 15vw;
    line-height: 4em;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto;
  padding: 10vh 14vw;
  grid-row-gap: 8vh;
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

export const BannerText = styled.div`
  color: white;
  font-size: 1.6em;
  font-weight: 600;
  text-align: center;
`;

export const IconText = styled(BannerText)`
  grid-column: 1 / span 4;
  color: black;
  margin-bottom: 1vh;
`;
