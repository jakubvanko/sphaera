import React from "react";

import {Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormRegister = () => (
    <FormContainer>
        <FormHeader>
            Register
        </FormHeader>
        <Form>
            <Input label={"First name"}/>
            <Input label={"Last name"}/>
            <Input label={"Email address"}/>
            <Input label={"Password"}/>
            <Input label={"Confirm password"}/>
            <Button>Submit</Button>
        </Form>
    </FormContainer>
);

export default FormRegister;
