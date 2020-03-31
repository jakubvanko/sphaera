import React from "react";

import {Container, HeadingMain} from "./Heading.styled";

const HEADING_MAP = {
    main: HeadingMain
};

const Heading = ({type, ...props}) => {
    const HeadingComponent = HEADING_MAP[type];
    return (
        <Container>
            <HeadingComponent {...props}/>
        </Container>
    )
};

export default Heading;
