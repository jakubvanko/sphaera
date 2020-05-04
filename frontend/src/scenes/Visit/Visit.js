import React from "react";

import { Hero } from "../../components/Hero";
import { HeadingMain, TextBasic } from "../../components/TextType";
import hero from "./assets/hero.jpg";
import ColorfulBlocks from "./components/ColorfulBlocks";
import Map from "./components/Map";
import { Container, ContentContainer, SectionContainer } from "./Visit.styled";

const Visit = () => (
  <Container>
    <Hero
      as={"img"}
      src={hero}
      alt={""}
      mainText={"We await you"}
      $bigMain
      $smallAdditional
      additionalText={
        "Everyone knows where we are, but just in case you don't..."
      }
    />
    <ContentContainer>
      <ColorfulBlocks />
      <SectionContainer>
        <HeadingMain>Maps</HeadingMain>
        <TextBasic>The following map will help you find a way...</TextBasic>
        <Map />
      </SectionContainer>
    </ContentContainer>
  </Container>
);

export default Visit;
