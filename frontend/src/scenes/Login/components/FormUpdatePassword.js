import { Form as FormikForm } from "formik";
import React from "react";
import * as Yup from "yup";

import { ButtonPrimaryLoader } from "../../../components/Button";
import { Form, FormikBase } from "../../../components/FormBase";
import { InputField } from "../../../components/Input/Input";

const FormUpdatePassword = () => (
  <FormikBase
    header={"Update Password"}
    emptyValues={["password", "confirmpassword"]}
    schema={(values) => ({
      password: Yup.string()
        .min(6, "Password must consist of at least 6 characters")
        .max(40, "Password must consist of at most 40 characters")
        .required("Please enter the required field"),
      confirmpassword: Yup.string()
        .matches(new RegExp(values.password), "Passwords must match")
        .required("Please enter the required field"),
    })}
    onSubmit={(values, { setSubmitting }) => {
      // TODO: CALL AN API
    }}
  >
    {({ isSubmitting, ...props }) => (
      <Form as={FormikForm}>
        <InputField
          label={"New password"}
          name={"password"}
          type={"password"}
          {...props}
        />
        <InputField
          label={"Confirm password"}
          name={"confirmpassword"}
          type={"password"}
          {...props}
        />
        <ButtonPrimaryLoader isLoading={isSubmitting}>
          Update Password
        </ButtonPrimaryLoader>
      </Form>
    )}
  </FormikBase>
);

export default FormUpdatePassword;
