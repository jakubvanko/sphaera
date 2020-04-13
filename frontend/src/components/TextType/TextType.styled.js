import styled from "styled-components";

export const TextLabeledContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 5px;
`;

export const HeadingMain = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const HeadingMedium = styled.h4`
  font-size: 1.8rem;
  text-transform: capitalize;
  font-weight: 600;
  
  @media screen and (min-width: 500px){
    font-size: 2.4rem;
  }
`;

export const TextBasic = styled.span`
  font-size: 1.2rem;
  text-transform: none;
  font-weight: 400;
  text-align: ${props => props.$align && props.$align};
`;

export const TextLabel = styled.span`
  color: var(--color-gray-5);
  font-size: 0.85rem;
`;

export const TextBig = styled.span`
  font-weight: 600;
  font-size: 1.3rem;
`;
