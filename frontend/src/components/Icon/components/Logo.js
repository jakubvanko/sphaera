import React from "react";

const Logo = ({ width = 30 }) => (
  <svg
    xmlns={"http://www.w3.org/2000/svg"}
    viewBox={"0 0 201 54.78"}
    width={width}
  >
    <path
      d={"M198,53.78S212.49-2.78,163,.11l-42.11,52Z"}
      transform={"translate(0.5 0.5)"}
      stroke={"#000"}
      strokeMiterlimit={"10"}
    />
    <path
      d={"M2,53.78S-12.49-2.78,37.05.11l42.11,52Z"}
      transform={"translate(0.5 0.5)"}
      stroke={"#000"}
      strokeMiterlimit={"10"}
    />
    <polygon
      points={
        "102.25 13.22 62.28 13.22 95.51 54.28 102.25 54.28 108.98 54.28 142.22 13.22 102.25 13.22"
      }
      stroke={"#000"}
      strokeMiterlimit={"10"}
    />
  </svg>
);

export default Logo;
