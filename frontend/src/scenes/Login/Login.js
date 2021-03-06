import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Container } from "./Login.styled";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import FormRegisterPlaceholder from "./components/FormRegisterPlaceholder";
import FormResetPassword from "./components/FormResetPassword";
import { resetResults } from "../../redux/actionCreators/user";

const Login = ({ user, resetResults }) => {
  const [isLoginForm, setLoginForm] = useState(true);
  const [isRegisterPlaceholderForm, setRegisterPlaceholderForm] = useState(
    true
  );
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (user._id) {
    history.replace(from);
  }

  useEffect(() => {
    resetResults();
  }, []);

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

export default connect(({ user }) => ({ user: user.current }), {
  resetResults,
})(Login);
