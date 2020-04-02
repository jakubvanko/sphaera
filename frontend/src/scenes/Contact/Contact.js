import React from "react";

import {Container, ContentContainer, ColorfulBlocksContainer, ColorfulBlock, IconContainer} from "./Contact.styled";
import Hero from "../../components/Hero/Hero";
import Icon from "../../components/Icon/Icon";

import hero from "./assets/hero.jpg";
import bookings from "./assets/bookings.jpg";
import business from "./assets/business.jpg";
import costume from "./assets/costume.jpg";
import pr from "./assets/pr.jpg";

const Contact = () => (
    <Container>
        <Hero as={"img"} src={hero} alt={""} mainText={"We're here for you"} $bigMain $smallAdditional
              additionalText={"Our staff is eager to fulfill all of your wishes..."}/>
        <ContentContainer>
            <ColorfulBlocksContainer>
                <ColorfulBlock $backgroundColor={"#eceae6"}>
                    General Enquiries
                    <IconContainer>
                        <Icon name={"arrowright"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $src={bookings} $color={"#fff"}>
                    Bookings
                    <IconContainer>
                        <Icon name={"arrowright"} $fill={"#fff"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $backgroundColor={"#89c485"}>
                    Chief Executive
                    <IconContainer>
                        <Icon name={"arrowright"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $src={business} $color={"#fff"}>
                    Business Manager
                    <IconContainer>
                        <Icon name={"arrowright"} $fill={"#fff"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $src={pr} $color={"#fff"}>
                    PR Manager
                    <IconContainer>
                        <Icon name={"arrowright"} width={26} $fill={"#fff"}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $backgroundColor={"#50c1e0"}>
                    Social Media Manager
                    <IconContainer>
                        <Icon name={"arrowright"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $backgroundColor={"#eceae6"}>
                    Choreographer
                    <IconContainer>
                        <Icon name={"arrowright"} width={26}/>
                    </IconContainer>
                </ColorfulBlock>
                <ColorfulBlock $src={costume} $color={"#fff"}>
                    Costume Designer
                    <IconContainer>
                        <Icon name={"arrowright"} width={26} $fill={"#fff"}/>
                    </IconContainer>
                </ColorfulBlock>
            </ColorfulBlocksContainer>
        </ContentContainer>
    </Container>
);

export default Contact;
