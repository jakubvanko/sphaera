import React, {useState} from "react";

import {Container, Link, List, LinkContainer, CloseButton} from "./Header.styled";
import Icon from "../../components/Icon/Icon";
import useWindowDimensions from "../../hooks/useWindowsDimensions";

const Header = () => {
    const [isMobileActive, setMobileActive] = useState(false);
    const [width] = useWindowDimensions();

    return (
        <Container>
            <Icon name={"logo"} width={25} $hoverFill={"#77bdbf"}/>
            <List $mobileActive={isMobileActive}>
                <CloseButton onClick={() => setMobileActive(false)}/>
                <LinkContainer><Link>Home</Link></LinkContainer>
                <LinkContainer><Link>Tickets</Link></LinkContainer>
                <LinkContainer><Link>Contact</Link></LinkContainer>
                <LinkContainer><Link>Visit Us</Link></LinkContainer>
                <LinkContainer $display={width >= 992 && "none"}><Link>Log In</Link></LinkContainer>
            </List>
            <Link $display={width < 992 && "none"}>Log In</Link>
            <Icon name={"hamburger"} width={20} onClick={() => setMobileActive(!isMobileActive)}
                  $display={width >= 992 && "none"} $hoverStroke={"#77bdbf"}/>
        </Container>
    )
};

export default Header;
