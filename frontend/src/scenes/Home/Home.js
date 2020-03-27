import React from "react";

import {
    Container,
    Video,
    VideoContainer,
    VideoText,
    VideoDescription,
    VideoTextContainer,
    IconContainer,
    BlackBanner,
    BannerText,
    IconText,
    CorporateContainer,
    CorporateLink,
    MainText
} from "./Home.styled";
import source from "./assets/home.mp4";
import BackgroundChangingText from "./components/BackgroundChangingText";
import Icon from "../../components/Icon/Icon";

const Home = () => {
    const iconWidth = 150;

    return (
        <Container>
            <VideoContainer>
                <Video autoPlay loop muted>
                    <source src={source} type="video/mp4"/>
                    Your browser does not support the video tag.
                </Video>
                <VideoTextContainer>
                    <VideoText>
                        Welcome to Sphaera
                    </VideoText>
                    <VideoDescription>
                        Choose from a wide range of shows
                    </VideoDescription>
                </VideoTextContainer>
            </VideoContainer>
            <BackgroundChangingText/>
            <BlackBanner>
                <BannerText>
                    Spheara is committed to promote inclusivity, passion, friendliness and a shared sense of belonging
                    through art and music. We
                    support artists and musicians whose mission is to empower people to be the best versions of
                    themselves.
                </BannerText>
            </BlackBanner>
            <IconContainer>
                <IconText>
                    Sphaera is proud to house these amazing groups:
                </IconText>
                <Icon width={iconWidth} name={"prerecorded"}/>
                <Icon width={iconWidth} name={"isaak"}/>
                <Icon width={iconWidth} name={"gawowed"}/>
                <Icon width={iconWidth} name={"mozell"}/>
                <Icon width={iconWidth} name={"arrangiatore"}/>
                <Icon width={iconWidth} name={"concordea"}/>
                <Icon width={iconWidth} name={"sonata"}/>
                <Icon width={iconWidth} name={"orphonic"}/>
            </IconContainer>
            <CorporateContainer>
                <MainText href={"#"}>
                    Sphaera is forever grateful to its family of <CorporateLink>Corporate Partners</CorporateLink> for
                    their support.
                </MainText>
            </CorporateContainer>
        </Container>
    )
};

export default Home;
