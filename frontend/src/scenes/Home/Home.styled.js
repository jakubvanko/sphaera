import styled from "styled-components";

export const Container = styled.div`
    
`;

export const VideoContainer = styled.div`
    position: relative;
    height: calc(100vh - var(--nav-height) + 5px);
    max-height: 100%;
    width: 100vw;
    max-width: 100%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 992px) {
        overflow: hidden;
    }
`;

export const Video = styled.video`
    width: 100vw;
    max-width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    @media only screen and (min-width: 992px) {
        @media (max-aspect-ratio: 15/9) {
            height: 100%;
            max-width: unset;
            width: auto;
        }
    }
`;

export const VideoText = styled.h1`
    color: white;
    font-weight: bolder;
    font-size: 4em;
`;

export const VideoDescription = styled(VideoText)`
    font-size: 1.1em;
    font-weight: 500;
`;

export const VideoTextContainer = styled.div`
    padding: 50px 0 0 200px;
    line-height: 4em;
`;
