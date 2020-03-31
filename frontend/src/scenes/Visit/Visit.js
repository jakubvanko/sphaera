import React from "react";

import {Container, ContentContainer} from "./Visit.styled";
import Hero from "../../components/Hero/Hero";

import hero from "./assets/hero.jpg"
import ColorfulBlocks from "./components/ColorfulBlocks";

const Visit = () => (
    <Container>
        <Hero as={"img"} src={hero} alt={""} mainText={"We await you"} $bigMain $smallAdditional
              additionalText={"Everyone knows where we are, but just in case you don't..."}/>
        <ContentContainer>
            <ColorfulBlocks/>
        </ContentContainer>
    </Container>
);

export default Visit;
