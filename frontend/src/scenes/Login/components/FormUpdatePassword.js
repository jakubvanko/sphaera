import React from "react";
import {Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormUpdatePassword = () => (
    <FormContainer>
        <FormHeader>
            Update Password
        </FormHeader>
        <Form>
            <Input label={"New password"}/>
            <Input label={"Confirm password"}/>
            <Button>Update password</Button>
        </Form>
    </FormContainer>
);

export default FormUpdatePassword;
