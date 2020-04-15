import {ErrorMessage, Field} from "formik";
import React, {useState} from "react";

import {InputContainer, Label, ErrorText, InputInteractive} from "./Input.styled";

export const LabeledInput = ({label, onChange, onBlur, errors, touched, formik, name, labelActive = false, ...props}) => {
    const [isFocused, setFocused] = useState(false);
    const [hasContent, setHasContent] = useState(false);

    const handleChange = e => {
        setHasContent(e.target.value !== "");
        onChange && onChange(e);
    };

    const handleBlur = e => {
        setFocused(false);
        onBlur && onBlur(e);
    };

    return (
        <InputContainer>
            <Label $focused={isFocused || hasContent || labelActive}>
                {label}
            </Label>
            <InputInteractive {...props} onFocus={() => setFocused(true)}
                              onBlur={handleBlur}
                              onChange={handleChange}
                              $error={touched && touched[name] && errors && errors[name]}
                              name={name}/>
            {props.setFormikState && <ErrorMessage name={name}>
                {msg => <ErrorText>{msg}</ErrorText>}
            </ErrorMessage>}
        </InputContainer>
    )
};

export const InputField = ({...props}) => (
    <Field as={LabeledInput} {...props}/>
);
