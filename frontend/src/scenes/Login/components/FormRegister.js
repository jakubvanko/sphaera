import { Form as FormikForm } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import { ButtonPrimaryLoader } from "../../../components/Button";
import { Form, FormikBase, FormStatus } from "../../../components/FormBase";
import { InputField } from "../../../components/Input";
import { registerRequest } from "../../../redux/actionCreators/user";

const FormRegister = ({
  registerPending,
  registerSuccess,
  registerError,
  registerRequest,
}) => (
  <FormikBase
    header={"Register"}
    emptyValues={[
      "firstName",
      "lastName",
      "email",
      "password",
      "confirmPassword",
    ]}
    schema={(values) => ({
      firstName: Yup.string()
        .max(40, "Please enter a valid name")
        .required("Please enter the required field"),
      lastName: Yup.string()
        .max(40, "Please enter a valid name")
        .required("Please enter the required field"),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter the required field"),
      password: Yup.string()
        .min(6, "Password must consist of at least 6 characters")
        .max(40, "Password must consist of at most 40 characters")
        .required("Please enter the required field"),
      confirmPassword: Yup.string()
        .matches(new RegExp(values.password), "Passwords must match")
        .required("Please enter the required field"),
    })}
    onSubmit={(values, { resetForm }) => {
      const { firstName, lastName, email, password } = values;
      registerRequest(firstName, lastName, email, password);
      resetForm();
    }}
  >
    {({ ...props }) => (
      <Form as={FormikForm}>
        <InputField label={"First name"} name={"firstName"} {...props} />
        <InputField label={"Last name"} name={"lastName"} {...props} />
        <InputField label={"Email address"} name={"email"} {...props} />
        <InputField
          label={"Password"}
          name={"password"}
          type={"password"}
          {...props}
        />
        <InputField
          label={"Confirm password"}
          name={"confirmPassword"}
          type={"password"}
          {...props}
        />
        <ButtonPrimaryLoader isLoading={registerPending}>
          Register
        </ButtonPrimaryLoader>
        <FormStatus
          success={registerSuccess}
          error={registerError}
          successMessage={
            "You have been successfully registered and can now log in."
          }
          errorMessage={
            "An error occurred while registering. Please try again later."
          }
        />
      </Form>
    )}
  </FormikBase>
);

export default connect(
  ({ user }) => ({
    registerPending: user.registerPending,
    registerSuccess: user.registerSuccess,
    registerError: user.registerError,
  }),
  { registerRequest }
)(FormRegister);
