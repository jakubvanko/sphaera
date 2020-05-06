import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import FormAddEvent from "./components/FormAddEvent";
import { Container } from "./Admin.styled";
import { URL_HOME } from "../../scripts/constants/urls";

const Admin = ({ user }) => {
  if (!user.admin) return <Redirect to={URL_HOME} />;

  return (
    <Container>
      <FormAddEvent />
    </Container>
  );
};

export default connect(({ user }) => ({ user: user.current }))(Admin);
