import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  position: absolute;
  border: 2px solid var(--color-gray-5);
  background-color: white;
  display: ${props => props.$displayed ? "block" : "none"};
  width: 180px;
  top: 0;
  left: 0;
  transform: translate(${props => props.$x - 90 || 0}px, ${props => props.$y - 180 || 0}px);
  
  :after {
    content: " ";
    border-top: 9px solid var(--color-gray-5);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    position: absolute;
    top: 100%;
    left: calc(50% - 9px);
  }
  line-height: 1.4rem;
`;

const ColoredSquare = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  display: inline-block;
  background-color: ${props => props.$color || "none"};
`;

const Text = styled.span`
  margin-left: 6px;
  font-weight: 600;
`;

const HoverBox = ({displayed, fill, area, available, price, x, y}) => (
    <Container $displayed={displayed} $x={x} $y={y}>
        <div>
            <ColoredSquare $color={fill}/>
            <Text>{area}</Text>
        </div>
        <div>
            Available:
            <Text>
                {available}
            </Text>
        </div>
        <div>
            Prices from:
            <Text>
                ${price}
            </Text>
        </div>
    </Container>
);

export default HoverBox;
