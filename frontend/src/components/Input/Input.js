import React, {useState} from "react";
import styled from "styled-components";
import {ErrorMessage, Field} from "formik";

export const InputBasic = styled.input`
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

export const InputInteractive = styled(InputBasic)`
  border-bottom-color: ${props => props.$error && "var(--color-red)"};
  color: ${props => props.$error && "var(--color-red)"};
  transition: border-bottom-color 0.2s;
  :focus {
    border-bottom-color: #ffaa18;
  }
`;

const Label = styled.label`
  position: absolute;
  z-index: -1;
  font-size: ${props => props.$focused ? "0.8rem" : "1.125rem"};
  color: var(--color-gray-5);
  top: ${props => props.$focused ? 0 : "24px"};
  left: ${props => props.$focused ? 0 : "2px"};
  transition: all 0.26s ease 0s;
`;

const InputContainer = styled.div`
  position: relative;
  padding: 22px 0 10px 0;
`;

const ErrorText = styled.div`
  color: var(--color-red);
  font-size: 0.8em;
  font-weight: 500;
  padding-top: 8px;
`;

/*
    This component only works with formik forms
 */
const LabeledInput = ({label, onChange, onBlur, errors, touched, name, ...props}) => {
    const [isFocused, setFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleChange = (e) => {
        setHasContent(e.target.value !== "");
        onChange && onChange(e);
    };

    const handleBlur = (e) => {
        setFocused(false);
        onBlur && onBlur(e);
    };

    return (
        <InputContainer>
            <Label $focused={isFocused || hasContent}>
                {label}
            </Label>
            <InputInteractive {...props} onFocus={() => setFocused(true)}
                   onBlur={handleBlur}
                   onChange={handleChange}
                   $error={touched && touched[name] && errors && errors[name]}
                   name={name}/>
            <ErrorMessage name={name}>
                {msg => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>
        </InputContainer>
    )
};

export const InputField = ({...props}) => (
    <Field as={LabeledInput} {...props}/>
);
