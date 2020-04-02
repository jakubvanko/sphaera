import React from "react";

import hero from "./assets/hero.jpg";
import bookings from "./assets/bookings.jpg";
import business from "./assets/business.jpg";
import costume from "./assets/costume.jpg";
import pr from "./assets/pr.jpg";

import {
    Container,
    ContentContainer,
    FlipCardsContainer,
    FlipCardFrontContainer,
    IconContainer,
    FlipCardBackContainer
} from "./Contact.styled";
import Hero from "../../components/Hero/Hero";
import FlipCard from "../../components/FlipCard/FlipCard";
import Icon from "../../components/Icon/Icon";

const CONTACTS = [
    {
        title: "General Enquiries",
        $backgroundColor: "#eceae6",
    }, {
        title: "Bookings",
        $backgroundImage: bookings,
    }, {
        title: "Chief Executive",
        $backgroundColor: "#89c485",
        name: "Dong Ch'en"
    }, {
        title: "Business Manager",
        $backgroundImage: business,
        name: ""
    }, {
        title: "PR Manager",
        $backgroundImage: pr,
    }, {
        title: "Social Media Manager",
        $backgroundColor: "#50c1e0",
    }, {
        title: "Choreographer",
        $backgroundColor: "#eceae6",
    }, {
        title: "Costume Designer",
        $backgroundImage: costume,
    }
];

const Contact = () => (
    <Container>
        <Hero as={"img"} src={hero} alt={""} mainText={"We're here for you"} $bigMain $smallAdditional
              additionalText={"Our staff is eager to fulfill all of your wishes..."}/>
        <ContentContainer>
            <FlipCardsContainer>
                {CONTACTS.map(value =>
                    <FlipCard>
                        <FlipCardFrontContainer $backgroundColor={value.$backgroundColor}
                                                $backgroundImage={value.$backgroundImage}
                                                $color={value.$backgroundImage && "white"}>
                            {value.title}
                            <IconContainer>
                                <Icon name={"arrowright"} width={26} $fill={value.$backgroundImage && "white"}/>
                            </IconContainer>
                        </FlipCardFrontContainer>
                        <FlipCardBackContainer>
                            <h5>Test</h5>
                            <p>ANother fasfa</p>
                            <p>and email is here</p>
                        </FlipCardBackContainer>
                    </FlipCard>
                )}
            </FlipCardsContainer>
        </ContentContainer>
    </Container>
);

export default Contact;
