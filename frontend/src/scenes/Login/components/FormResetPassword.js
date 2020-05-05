import { Form as FormikForm } from "formik";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

import { ButtonPrimaryLoader } from "../../../components/Button";
import { FormikBase, Form, FormStatus } from "../../../components/FormBase";
import { InputField } from "../../../components/Input";
import { AdditionalText } from "../Login.styled";
import { resetPasswordRequest } from "../../../redux/actionCreators/user";

const FormResetPassword = ({
  onFormChange,
  resetPasswordRequest,
  resetPasswordPending,
  resetPasswordSuccess,
  resetPasswordError,
}) => (
  <FormikBase
    header={"Reset Password"}
    emptyValues={["email"]}
    schema={() => ({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Please enter the required field"),
    })}
    onSubmit={(values, { resetForm }) => {
      resetPasswordRequest(values.email);
      resetForm();
    }}
  >
    {({ ...props }) => (
      <Form as={FormikForm}>
        <InputField label={"Email address"} name={"email"} {...props} />
        <ButtonPrimaryLoader isLoading={resetPasswordPending}>
          Reset password
        </ButtonPrimaryLoader>
        <FormStatus
          success={resetPasswordSuccess}
          error={resetPasswordError}
          successMessage={
            "Password reset link was sent to the specified email."
          }
          errorMessage={
            "An error occurred while resetting password. Please try again later."
          }
        />
        <AdditionalText onClick={onFormChange}>
          Log in with your password instead.
        </AdditionalText>
      </Form>
    )}
  </FormikBase>
);

export default connect(
  ({ user }) => ({
    resetPasswordPending: user.resetPasswordPending,
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError,
  }),
  { resetPasswordRequest }
)(FormResetPassword);
