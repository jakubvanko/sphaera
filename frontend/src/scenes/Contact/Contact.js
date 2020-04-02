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
    FlipCardBackContainer,
    ContactName
} from "./Contact.styled";
import Hero from "../../components/Hero/Hero";
import FlipCard from "../../components/FlipCard/FlipCard";
import Icon from "../../components/Icon/Icon";

const CONTACTS = [
    {
        title: "General Enquiries",
        $frontBackgroundColor: "rgba(236,234,230,0.61)",
        $backBackgroundColor: "#ECFCE1",
        email: "general@sphaera.con",
        phone: "+421 255 000"
    }, {
        title: "Bookings",
        $backgroundImage: bookings,
        $backBackgroundColor: "#FFFDDB",
        email: "booking@sphaera.con",
        phone: "+421 255 001"
    }, {
        title: "Chief Executive",
        $frontBackgroundColor: "rgba(137,196,133,0.61)",
        $backBackgroundColor: "#FFF0EB",
        name: "Dong Ch'en",
        email: "dongchen@sphaera.con",
        phone: "+421 255 100"
    }, {
        title: "Business Manager",
        $backgroundImage: business,
        $backBackgroundColor: "#D9FFFC",
        name: "Nathan Henry",
        email: "nathanhenry@sphaera.con",
        phone: "+421 255 200"
    }, {
        title: "PR Manager",
        $backgroundImage: pr,
        $backBackgroundColor: "#F8E3FF",
        name: "Jason V. Thomas",
        email: "jasonthomas@sphaera.con",
        phone: "+421 255 300"
    }, {
        title: "Social Media Manager",
        $frontBackgroundColor: "rgba(80,193,224,0.85)",
        $backBackgroundColor: "#D9FFFC",
        name: "Alisha Young",
        email: "alishayoung@sphaera.con",
        phone: "+421 255 400"
    }, {
        title: "Choreographer",
        $frontBackgroundColor: "rgba(236,234,230,0.61)",
        $backBackgroundColor: "#ECFCE1",
        name: "Isaac Polyakov",
        email: "isaacpolyakov@sphaera.con",
        phone: "+421 255 502"
    }, {
        title: "Costume Designer",
        $backgroundImage: costume,
        $backBackgroundColor: "#FFFDDB",
        name: "Izabelle Holmberg",
        email: "izabelleholmberg@sphaera.con",
        phone: "+421 255 503"
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
                        <FlipCardFrontContainer $backgroundColor={value.$frontBackgroundColor}
                                                $backgroundImage={value.$backgroundImage}
                                                $color={value.$backgroundImage && "white"}>
                            {value.title}
                            <IconContainer>
                                <Icon name={"arrowright"} width={26} $fill={value.$backgroundImage && "white"}/>
                            </IconContainer>
                        </FlipCardFrontContainer>
                        <FlipCardBackContainer $backgroundColor={value.$backBackgroundColor}>
                            <h5>{value.title}</h5>
                            {value.name && <ContactName>{value.name}</ContactName>}
                            <p>{value.email}</p>
                            <p>{value.phone}</p>
                        </FlipCardBackContainer>
                    </FlipCard>)}
            </FlipCardsContainer>
        </ContentContainer>
    </Container>
);

export default Contact;
