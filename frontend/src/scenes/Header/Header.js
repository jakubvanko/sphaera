import React, { useState } from "react";
import { connect } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";

import { Icon } from "../../components/Icon";
import { LabeledInput } from "../../components/Input";
import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";
import {
  URL_CART,
  URL_CONTACT,
  URL_HOME,
  URL_LOGIN,
  URL_PROFILE,
  URL_TICKETS,
  URL_VISIT,
} from "../../scripts/constants/urls";
import {
  Container,
  Link,
  List,
  LinkContainer,
  CloseButton,
  IconLinkContainer,
  SearchContainer,
  LogoContainer,
  IconLink,
} from "./Header.styled";

const Header = ({ user }) => {
  const [isMobileActive, setMobileActive] = useState(false);
  const [width] = useWindowDimensions();

  const accountText = user._id
    ? (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase()
    : "Log In";
  const accountLink = user._id ? URL_PROFILE : URL_LOGIN;

  return (
    <Container>
      <LogoContainer>
        <IconLink to={URL_HOME}>
          <Icon name={"logo"} width={100} aria-label={"home"} />
        </IconLink>
      </LogoContainer>
      <SearchContainer>
        <LabeledInput label={"Search for..."} name={"search"} />
        <Icon as={RouterLink} to={URL_TICKETS} name={"search"} width={30} />
      </SearchContainer>
      <List $mobileActive={isMobileActive}>
        <CloseButton
          onClick={() => setMobileActive(false)}
          aria-label={"close navigation"}
        />
        <LinkContainer>
          <Link to={URL_HOME} onClick={() => setMobileActive(false)}>
            Home
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={URL_TICKETS} onClick={() => setMobileActive(false)}>
            Tickets
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={URL_CONTACT} onClick={() => setMobileActive(false)}>
            Contact
          </Link>
        </LinkContainer>
        <LinkContainer>
          <Link to={URL_VISIT} onClick={() => setMobileActive(false)}>
            Visit Us
          </Link>
        </LinkContainer>
        <LinkContainer $display={width >= 992 && "none"}>
          <Link to={accountLink} onClick={() => setMobileActive(false)}>
            {accountText}
          </Link>
        </LinkContainer>
        <LinkContainer $display={width >= 992 && "none"}>
          <Link to={URL_CART} onClick={() => setMobileActive(false)}>
            Cart
          </Link>
        </LinkContainer>
      </List>
      <IconLinkContainer $border as={RouterLink} to={accountLink}>
        <Icon name={"user"} width={23} />
        <Link as={"span"}>{accountText}</Link>
      </IconLinkContainer>
      <IconLinkContainer as={RouterLink} to={URL_CART}>
        <Icon name={"cart"} width={24} />
        <Link as={"span"}>Cart</Link>
      </IconLinkContainer>
      <Icon
        name={"hamburger"}
        width={20}
        onClick={() => setMobileActive(!isMobileActive)}
        $display={width >= 992 && "none"}
        $hoverStroke={"#77bdbf"}
        aria-label={"open navigation"}
      />
    </Container>
  );
};

export default connect(({ user }) => ({ user: user.current }))(Header);
