import React, {useState} from "react";
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

const Label = styled.label`
  position: absolute;
  z-index: -1;
  font-size: ${props => props.$focused ? "0.8em" : "18px"};
  color: gray;
  top: ${props => props.$focused ? 0 : "25px"};
  left: ${props => props.$focused ? 0 : "2px"};
  transition: all 0.26s ease 0s;
`;

const Input = styled.input`
  border: none;
  padding: 0 2px;
  border-bottom: 2px #505050 solid;
  transition: border-bottom-color 0.2s;
  :focus {
    border-bottom-color: #ffaa18;
  }
  padding-bottom: 8px;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  background-color: transparent;
`;

const InputContainer = styled.div`
  position: relative;
  padding: 22px 0 10px 0;
`;

const LabeledInput = ({label, ...props}) => {
    const [isFocused, setFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    return (
        <InputContainer>
            <Label $focused={isFocused || hasContent}>
                {label}
            </Label>
            <Input {...props} onFocus={() => setFocused(true)}
                   onBlur={(() => setFocused(false))}
                   onChange={e => setHasContent(e.target.value !== "")}/>
        </InputContainer>
    )
};

export default LabeledInput;
