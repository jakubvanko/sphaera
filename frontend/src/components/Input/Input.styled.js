import styled from "styled-components";

const InputBase = styled.input`
  outline: none;
  border: none;
  border-bottom: solid 2px var(--color-gray-3);
  color: black;
  font-weight: 400;
  font-size: 1.125rem;
  background-color: transparent;
  width: 100%;
  padding: 3px 2px 4px;
  
  ::placeholder {
    color: var(--color-gray-6);
    opacity: 1; /* Firefox */
  }
`;

export const InputInteractive = styled(InputBase)`
  border-bottom-color: ${props => props.$error && "var(--color-red)"};
  color: ${props => props.$error && "var(--color-red)"};
  transition: border-bottom-color 0.2s;
  :focus {
    border-bottom-color: #ffaa18;
  }
`;

export const Label = styled.label`
  position: absolute;
  font-weight: normal;
  font-size: ${props => props.$focused ? "0.8rem" : "1.125rem"};
  color: var(--color-gray-5);
  top: ${props => props.$focused ? 0 : "24px"};
  left: ${props => props.$focused ? 0 : "2px"};
  transition: all 0.26s ease 0s;
  z-index: -1;
`;

export const InputContainer = styled.div`
  position: relative;
  padding: 22px 0 10px 0;
  background-color: transparent;
  z-index: 1;
`;

export const ErrorText = styled.div`
  color: var(--color-red);
  font-size: 0.8rem;
  font-weight: 500;
  padding-top: 8px;
`;
