import React from "react";

import {Container} from "./Icon.styled";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";

const ICON_MAP = {
    hamburger: Hamburger,
    logo: Logo
};

const Icon = ({name, width, ...props}) => {
    const IconComponent = ICON_MAP[name];
    return (
        <Container {...props}>
            <IconComponent width={width}/>
        </Container>
    )
};

export default Icon;
