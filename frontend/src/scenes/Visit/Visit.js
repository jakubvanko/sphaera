import React from "react";

import {Container, ContentContainer, SectionContainer} from "./Visit.styled";
import Hero from "../../components/Hero/Hero";
import ColorfulBlocks from "./components/ColorfulBlocks";
import Heading from "../../components/Heading/Heading";
import Map from "./components/Map";
import Text from "../../components/Text/Text";

import hero from "./assets/hero.jpg"

const Visit = () => (
    <Container>
        <Hero as={"img"} src={hero} alt={""} mainText={"We await you"} $bigMain $smallAdditional
              additionalText={"Everyone knows where we are, but just in case you don't..."}/>
        <ContentContainer>
            <ColorfulBlocks/>
            <SectionContainer>
                <Heading type={"main"}>Maps</Heading>
                <Text>
                    The following map will help you find a way...
                </Text>
                <Map/>
            </SectionContainer>
        </ContentContainer>
    </Container>
);

export default Visit;
