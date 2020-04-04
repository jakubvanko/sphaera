import React from "react";
import {Button, Form, FormContainer, FormHeader, FormText} from "../Login.styled";

const FormRegisterPlaceholder = ({onFormChange}) => (
    <FormContainer>
        <FormHeader>
            Register
        </FormHeader>
        <Form>
            <FormText>
                By creating and registering a new account, you agree that your personal information is going to be
                safely stored by Sphaera Corporation on a virtual server
                according to the GDPR law, personal protection law, and additional laws of the European Union.
                <br/>
                <br/>
                You also implicitly agree to our Terms & Conditions and our Privacy Policy.
            </FormText>
            <Button onClick={onFormChange}>Register</Button>
        </Form>
    </FormContainer>
);

export default FormRegisterPlaceholder;
