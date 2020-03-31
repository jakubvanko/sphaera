import React, {useState} from "react";

import useWindowDimensions from "../../hooks/useWindowsDimensions";
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
import {BasicInput} from "../../components/Input/Input";

const Header = () => {
    const [isMobileActive, setMobileActive] = useState(false);
    const [width] = useWindowDimensions();

    return (
        <Container>
            <LogoContainer>
                <Icon name={"logo"} width={100} aria-label={"home"}/>
            </LogoContainer>
            <SearchContainer>
                <BasicInput $width={"180px"} placeholder={"Search for..."}/>
                <Icon name={"search"} width={30}/>
            </SearchContainer>
            <List $mobileActive={isMobileActive}>
                <CloseButton onClick={() => setMobileActive(false)} aria-label={"close navigation"}/>
                <LinkContainer><Link>Home</Link></LinkContainer>
                <LinkContainer><Link>Tickets</Link></LinkContainer>
                <LinkContainer><Link>Contact</Link></LinkContainer>
                <LinkContainer><Link>Visit Us</Link></LinkContainer>
                <LinkContainer $display={width >= 992 && "none"}><Link>Log In</Link></LinkContainer>
            </List>
            <IconLinkContainer $border>
                <Icon name={"user"} width={23}/>
                <Link as={"span"}>Log In</Link>
            </IconLinkContainer>
            <IconLinkContainer>
                <Icon name={"cart"} width={24}/>
                <Link as={"span"}>Cart</Link>
            </IconLinkContainer>
            <Icon name={"hamburger"} width={20} onClick={() => setMobileActive(!isMobileActive)}
                  $display={width >= 992 && "none"} $hoverStroke={"#77bdbf"} aria-label={"open navigation"}/>
        </Container>
    )
};

export default Header;
