import React from "react";

import {Container, IconContainer, LinksContainer, SmallLink, AdditionalContainer, CopyrightText} from "./Footer.styled";
import Icon from "../../components/Icon/Icon";

const LINKS = [
    "Career",
    "Feedback",
    "Sitemap",
    "Newsletter",
    "Membership",
    "Give",
    "Tickets",
    "Reserve",
    "Artists",
    "Gift Vouchers",
    "Authorities"
];

const Footer = () => {
    const iconWidth = 28;

    return (
        <Container>
            <IconContainer>
                <Icon width={iconWidth} name={"facebook"}/>
                <Icon width={iconWidth} name={"twitter"}/>
                <Icon width={iconWidth} name={"instagram"}/>
                <Icon width={iconWidth} name={"youtube"}/>
                <Icon width={iconWidth} name={"tiktok"}/>
                <Icon width={iconWidth} name={"foursquare"}/>
            </IconContainer>
            <LinksContainer>
                {LINKS.map(value => <SmallLink>{value}</SmallLink>)}
            </LinksContainer>
            <AdditionalContainer>
                <CopyrightText>
                    Jakub Vanko
                </CopyrightText>
                <CopyrightText>
                    © 2020, Slovakia
                </CopyrightText>
            </AdditionalContainer>
        </Container>
    )
};

export default Footer;
