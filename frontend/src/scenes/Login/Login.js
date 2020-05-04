import React, { useState } from "react";

import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import FormRegisterPlaceholder from "./components/FormRegisterPlaceholder";
import FormResetPassword from "./components/FormResetPassword";
import { Container } from "./Login.styled";

const Login = () => {
  const [isLoginForm, setLoginForm] = useState(true);
  const [isRegisterPlaceholderForm, setRegisterPlaceholderForm] = useState(
    true
  );

  return (
    <Container>
      {isLoginForm ? (
        <FormLogin onFormChange={() => setLoginForm(false)} />
      ) : (
        <FormResetPassword onFormChange={() => setLoginForm(true)} />
      )}
      {isRegisterPlaceholderForm ? (
        <FormRegisterPlaceholder
          onFormChange={() => setRegisterPlaceholderForm(false)}
        />
      ) : (
        <FormRegister onFormChange={() => setRegisterPlaceholderForm(true)} />
      )}
    </Container>
  );
};

export default Login;
