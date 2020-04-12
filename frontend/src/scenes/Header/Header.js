import React, {useState} from "react";
import {Link as RouterLink} from "react-router-dom";

import useWindowDimensions from "../../scripts/hooks/useWindowsDimensions";
import {
    Container,
    Link,
    List,
    LinkContainer,
    CloseButton,
    IconLinkContainer,
    SearchContainer,
    LogoContainer
} from "./Header.styled";
import Icon from "../../components/Icon/Icon";
import {InputBasic} from "../../components/Input/Input";
import {URL_CART, URL_CONTACT, URL_HOME, URL_LOGIN, URL_TICKETS, URL_VISIT} from "../../scripts/constants/urls";

const Header = () => {
    const [isMobileActive, setMobileActive] = useState(false);
    const [width] = useWindowDimensions();

    return (
        <Container>
            <LogoContainer>
                <Icon name={"logo"} width={100} aria-label={"home"}/>
            </LogoContainer>
            <SearchContainer>
                <InputBasic placeholder={"Search for..."}/>
                <Icon name={"search"} width={30}/>
            </SearchContainer>
            <List $mobileActive={isMobileActive}>
                <CloseButton onClick={() => setMobileActive(false)} aria-label={"close navigation"}/>
                <LinkContainer><Link to={URL_HOME}>Home</Link></LinkContainer>
                <LinkContainer><Link to={URL_TICKETS}>Tickets</Link></LinkContainer>
                <LinkContainer><Link to={URL_CONTACT}>Contact</Link></LinkContainer>
                <LinkContainer><Link to={URL_VISIT}>Visit Us</Link></LinkContainer>
                <LinkContainer $display={width >= 992 && "none"}><Link to={URL_LOGIN}>Log In</Link></LinkContainer>
                <LinkContainer $display={width >= 992 && "none"}><Link to={URL_CART}>Cart</Link></LinkContainer>
            </List>
            <IconLinkContainer $border as={RouterLink} to={URL_LOGIN}>
                <Icon name={"user"} width={23}/>
                <Link as={"span"}>Log In</Link>
            </IconLinkContainer>
            <IconLinkContainer as={RouterLink} to={URL_CART}>
                <Icon name={"cart"} width={24}/>
                <Link as={"span"}>Cart</Link>
            </IconLinkContainer>
            <Icon name={"hamburger"} width={20} onClick={() => setMobileActive(!isMobileActive)}
                  $display={width >= 992 && "none"} $hoverStroke={"#77bdbf"} aria-label={"open navigation"}/>
        </Container>
    )
};

export default Header;
