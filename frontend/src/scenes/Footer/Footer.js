import React from "react";

import { Icon } from "../../components/Icon";
import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";
import {
  AdditionalContainer,
  Container,
  CopyrightText,
  IconContainer,
  LinksContainer,
  SmallLink,
} from "./Footer.styled";

const LINKS = [
  "Career",
  "Feedback",
  "Sitemap",
  "Newsletter",
  "Membership",
  "Give",
  "Tickets",
  "Reservations",
  "Artists",
  "Gift Vouchers",
  "Authorities",
];

const Footer = () => {
  const [width] = useWindowDimensions();
  const iconWidth = 28;

  return (
    <Container>
      <IconContainer>
        <Icon width={iconWidth} name={"facebook"} />
        <Icon width={iconWidth} name={"twitter"} />
        <Icon width={iconWidth} name={"instagram"} />
        <Icon width={iconWidth} name={"youtube"} />
        <Icon width={iconWidth} name={"tiktok"} />
        <Icon width={iconWidth} name={"foursquare"} />
      </IconContainer>
      <LinksContainer>
        {LINKS.map((value) => (
          <SmallLink key={value}>{value}</SmallLink>
        ))}
      </LinksContainer>
      <AdditionalContainer>
        {width > 991 ? (
          <>
            <CopyrightText>Jakub Vanko</CopyrightText>
            <CopyrightText>© 2020, Slovakia</CopyrightText>
          </>
        ) : (
          <CopyrightText>© 2020 Jakub Vanko, Slovakia</CopyrightText>
        )}
      </AdditionalContainer>
    </Container>
  );
};

export default Footer;
