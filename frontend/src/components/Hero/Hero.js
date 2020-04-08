import React from "react";

import {Container, GraphicContent, TextContainer, MainText, AdditionalText} from "./Hero.styled";

const Hero = ({as, src, mainText, additionalText, $bigMain, $smallAdditional, $height, ...props}) => {
    return (
        <Container $height={$height}>
            <GraphicContent as={as} src={src} {...props}>
                {as === "video" ? <>
                    <source src={src} type="video/mp4"/>
                    Your browser does not support the video tag. Please consider upgrading to a more modern browser.
                </> : null}
            </GraphicContent>
            <TextContainer>
                {mainText && <MainText $big={$bigMain}>{mainText}</MainText>}
                {additionalText && <AdditionalText $small={$smallAdditional}>{additionalText}</AdditionalText>}
            </TextContainer>
        </Container>
    )
};

export default Hero;
