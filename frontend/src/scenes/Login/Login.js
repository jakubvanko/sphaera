import React, {useState} from "react";

import {Container} from "./Login.styled";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import FormResetPassword from "./components/FormResetPassword";
import FormRegisterPlaceholder from "./components/FormRegisterPlaceholder";

const Login = () => {
    const [isLoginForm, setLoginForm] = useState(true);
    const [isRegisterPlaceholderForm, setRegisterPlaceholderForm] = useState(true);

    return (
        <Container>
            {isLoginForm ? <FormLogin onFormChange={() => setLoginForm(false)}/> :
                <FormResetPassword onFormChange={() => setLoginForm(true)}/>}
            {isRegisterPlaceholderForm ?
                <FormRegisterPlaceholder onFormChange={() => setRegisterPlaceholderForm(false)}/> :
                <FormRegister onFormChange={() => setRegisterPlaceholderForm(true)}/>}
        </Container>
    )
};

export default Login;
