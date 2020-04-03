import React from "react";
import {AdditionalText, Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormResetPassword = ({onFormChange}) => (
    <FormContainer>
        <FormHeader>
            Reset Password
        </FormHeader>
        <Form>
            <Input label={"Email address"}/>
            <Button>Submit</Button>
            <AdditionalText onClick={onFormChange}>Log in with your password instead.</AdditionalText>
        </Form>
    </FormContainer>
);

export default FormResetPassword;
