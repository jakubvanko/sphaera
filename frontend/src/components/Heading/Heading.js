import React from "react";

import {Main} from "./Heading.styled";

const HEADING_MAP = {
    main: Main
};

const Heading = ({type, ...props}) => {
    const HeadingComponent = HEADING_MAP[type];
    return (
        <HeadingComponent {...props}/>
    )
};

export default Heading;
