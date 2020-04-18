import styled from "styled-components";

export const Text = styled.text`
  font-size: 5px;
  user-select: none;
`;

export const G = styled.g`
  cursor: ${props => props.$selectable && "pointer"};
  
  :hover {
    opacity: ${props => props.$selectable && 0.5};;
  }
`;
