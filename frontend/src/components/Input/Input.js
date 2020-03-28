import styled from "styled-components";

export const BasicInput = styled.input`
    border: none;
    border-bottom: 2px black solid;
    padding-bottom: 8px;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    width: ${props => props.$width && props.$width};
    
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #9a9a9a;
      opacity: 1; /* Firefox */
    }
`;
