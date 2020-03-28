import React from "react";

const Hamburger = ({width = 13}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width / 13 * 12} viewBox="0 0 13 12" stroke="#000">
        <g transform="translate(-322.5 -25.5)">
            <line x2="13" transform="translate(322.5 26.5)" fill="none" strokeWidth="2"/>
            <line x2="13" transform="translate(322.5 31.5)" fill="none" strokeWidth="2"/>
            <line x2="13" transform="translate(322.5 36.5)" fill="none" strokeWidth="2"/>
        </g>
    </svg>
);

export default Hamburger;
