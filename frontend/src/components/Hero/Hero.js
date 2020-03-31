import React from "react";

import {Container, GraphicContent, TextContainer, MainText, AdditionalText} from "./Hero.styled";
import source from "../../scenes/Home/assets/home.mp4";

const Hero = ({as, src, mainText, additionalText, ...props}) => (
    <Container>
        <GraphicContent as={as} src={src} {...props}>
            {as === "video" && <>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag. Please consider upgrading to a more modern browser.
            </>}
        </GraphicContent>
        <TextContainer>
            {mainText && <MainText>{mainText}</MainText>}
            {additionalText && <AdditionalText>{additionalText}</AdditionalText>}
        </TextContainer>
    </Container>
);

export default Hero;
