import styled from "styled-components";

const Text = styled.span`
  font-size: 1.2rem;
  text-transform: none;
  font-weight: 400;
  text-align: ${props => props.$align && props.$align};
`;

export default Text;
