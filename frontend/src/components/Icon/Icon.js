import React from "react";

import {Container} from "./Icon.styled";
import Hamburger from "./components/Hamburger";
import Logo from "./components/Logo";
import Prerecorded from "./components/Prerecorded";
import Isaak from "./components/Isaak";
import Gawowed from "./components/Gawowed";
import Mozell from "./components/Mozell";
import Arrangiatore from "./components/Arrangiatore";
import Concordea from "./components/Concordea";
import Sonata from "./components/Sonata";
import Orphonic from "./components/Orphonic";

const ICON_MAP = {
    hamburger: Hamburger,
    logo: Logo,
    prerecorded: Prerecorded,
    isaak: Isaak,
    gawowed: Gawowed,
    mozell: Mozell,
    arrangiatore: Arrangiatore,
    concordea: Concordea,
    sonata: Sonata,
    orphonic: Orphonic
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
