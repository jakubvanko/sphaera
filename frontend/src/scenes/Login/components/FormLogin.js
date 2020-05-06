import { Form as FormikForm } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import { ButtonPrimaryLoader } from "../../../components/Button";
import { FormikBase, Form, FormStatus } from "../../../components/FormBase";
import { InputField } from "../../../components/Input";
import { AdditionalText } from "../Login.styled";
import { loginRequest } from "../../../redux/actionCreators/user";

const FormLogin = ({
  onFormChange,
  loginPending,
  loginError,
  loginRequest,
}) => (
  <FormikBase
    header={"Log In"}
    emptyValues={["email", "password"]}
    schema={() => ({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter the required field"),
      password: Yup.string().required("Please enter the required field"),
    })}
    onSubmit={(values, { setFieldValue }) => {
      const { email, password } = values;
      loginRequest(email, password);
      setFieldValue("password", "", false);
    }}
  >
    {({ ...props }) => (
      <Form as={FormikForm}>
        <InputField label={"Email address"} name={"email"} {...props} />
        <InputField
          label={"Password"}
          name={"password"}
          type={"password"}
          {...props}
        />
        <ButtonPrimaryLoader type={"submit"} isLoading={loginPending}>
          Log in
        </ButtonPrimaryLoader>
        <AdditionalText onClick={onFormChange}>
          Forgotten your password?
        </AdditionalText>
        <FormStatus
          error={loginError}
          errorMessage={
            "Failed to log in. Please try again or reset your password."
          }
        />
      </Form>
    )}
  </FormikBase>
);

export default connect(
  ({ user }) => ({
    loginPending: user.loginPending,
    loginError: user.loginError,
  }),
  {
    loginRequest,
  }
)(FormLogin);
