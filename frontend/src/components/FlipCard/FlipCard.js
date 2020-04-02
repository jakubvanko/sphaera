import React, {useState} from "react";
import styled from "styled-components";

const FlipCardContainer = styled.div`
  perspective: 1000px;
  width: ${props => props.$width || "100%"};
  max-width: 400px;
  height: 220px;
  cursor: pointer;
`;

const FlipCardContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.$flipped && "rotateY(180deg)"};
`;

const FlipCardSide = styled.div`
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
`;

const FlipCardFront = styled(FlipCardSide)`
  position: absolute;
`;

const FlipCardBack = styled(FlipCardSide)`
  transform: rotateY(180deg);
`;

const FlipCard = ({children, ...props}) => {
    const [isFlipped, setFlipped] = useState(false);

    return (
        <FlipCardContainer {...props} onClick={() => setFlipped(!isFlipped)}>
            <FlipCardContentContainer $flipped={isFlipped}>
                <FlipCardFront>
                    {children[0]}
                </FlipCardFront>
                <FlipCardBack>
                    {children[1]}
                </FlipCardBack>
            </FlipCardContentContainer>
        </FlipCardContainer>
    )
};

export default FlipCard;
