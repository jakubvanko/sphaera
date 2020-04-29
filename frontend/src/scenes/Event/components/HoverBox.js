import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  position: absolute;
  border: 2px solid var(--color-gray-5);
  background-color: white;
  
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

const HoverBox = () => (
    <Container>
        <div>
            <ColoredSquare $color={"pink"}/>
            <Text>A</Text>
        </div>
        <div>
            Available:
            <Text>
                51
            </Text>
        </div>
        <div>
            Prices from:
            <Text>
                $55.04
            </Text>
        </div>
    </Container>
);

export default HoverBox;
