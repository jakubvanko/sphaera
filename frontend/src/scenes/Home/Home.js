import React from "react";

import {Container, Video, VideoContainer, VideoText, VideoDescription, VideoTextContainer} from "./Home.styled";
import source from "./assets/home.mp4";

const Home = () => {

    return (
        <Container>
            <VideoContainer>
                <Video autoPlay loop muted>
                    <source src={source} type="video/mp4"/>
                    Your browser does not support the video tag.
                </Video>
                <VideoTextContainer>
                    <VideoText>
                        New Tickets Available
                    </VideoText>
                    <VideoDescription>
                        Choose from a wide range of shows
                    </VideoDescription>
                </VideoTextContainer>
            </VideoContainer>
        </Container>
    )
};

export default Home;
