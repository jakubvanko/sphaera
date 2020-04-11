import React, {useState} from "react";
import styled from "styled-components";

const FlipCardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.$flipped && "rotateY(180deg)"};
  
  > * {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
    :nth-child(2) {
      transform: rotateY(180deg);
    }
  }
`;

const FlipCard = ({children, ...props}) => {
    const [isFlipped, setFlipped] = useState(false);
    if (children.length < 2) {
        throw new Error("FlipCard needs 2 children to function properly.")
    }

    return (
        <div style={{perspective: "1000px"}} {...props} onClick={() => setFlipped(!isFlipped)}>
            <FlipCardContentContainer $flipped={isFlipped}>
                {children}
            </FlipCardContentContainer>
        </div>
    )
};

export default FlipCard;
