import styled from "styled-components";

export const Container = styled.div`
  perspective: 1000px;
  
  > div {
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
  }
`;
