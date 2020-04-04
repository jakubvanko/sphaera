import React from "react";

import {Button, Form, FormContainer, FormHeader, AdditionalText} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormLogin = ({onFormChange}) => (
    <FormContainer>
        <FormHeader>
            Log In
        </FormHeader>
        <Form>
            <Input label={"Email address"}/>
            <Input label={"Password"} type={"password"}/>
            <Button>Log in</Button>
            <AdditionalText onClick={onFormChange}>Forgotten your password?</AdditionalText>
        </Form>
    </FormContainer>
);

export default FormLogin;
