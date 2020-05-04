import styled from "styled-components";

export const Text = styled.text`
  font-size: 5px;
  user-select: none;
`;

export const G = styled.g`
  cursor: ${(props) => props.$selectable && "pointer"};
  opacity: ${(props) => props.$disabled && 0.5};

  :hover {
    opacity: ${(props) => props.$selectable && 0.5};
  }
`;
