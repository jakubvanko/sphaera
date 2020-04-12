import styled from "styled-components";

export const HeadingMain = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

export const TextBasic = styled.span`
  font-size: 1.2rem;
  text-transform: none;
  font-weight: 400;
  text-align: ${props => props.$align && props.$align};
`;
