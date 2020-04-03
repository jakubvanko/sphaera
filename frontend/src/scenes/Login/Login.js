import React, {useState} from "react";

import {Container} from "./Login.styled";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import FormResetPassword from "./components/FormResetPassword";

const Login = () => {
    const [isLoginForm, setLoginForm] = useState(true);

    return (
        <Container>
            {isLoginForm ? <FormLogin onFormChange={() => setLoginForm(false)}/> :
                <FormResetPassword onFormChange={() => setLoginForm(true)}/>}
            <FormRegister/>
        </Container>
    )
};

export default Login;
