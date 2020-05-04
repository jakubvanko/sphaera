import { Formik, validateYupSchema, yupToFormErrors } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import { ContainerBordered } from "../Container";
import { Form, FormHeader } from "./FormBase.styled";

const Base = ({ header, children }) => (
  <ContainerBordered>
    {header && <FormHeader>{header}</FormHeader>}
    {children}
  </ContainerBordered>
);

export const FormBase = ({ header, children }) => (
  <Base header={header}>
    <Form>{children}</Form>
  </Base>
);

export const FormikBase = ({
  header,
  schema,
  validate,
  initialValues = {},
  emptyValues = [],
  ...props
}) => {
  const [validationRan, setValidationRan] = useState(false);
  for (const value of emptyValues) {
    initialValues[value] = "";
  }

  return (
    <Base header={header}>
      <Formik
        {...props}
        initialValues={initialValues}
        validate={(values) => {
          setValidationRan(true);
          let errors = {};
          if (schema) {
            const validationSchema = Yup.object().shape(schema(values));
            try {
              validateYupSchema(values, validationSchema, true);
            } catch (err) {
              errors = { ...yupToFormErrors(err) };
            }
          }
          if (validate) errors = { ...errors, ...validate(values) };
          return errors;
        }}
        validateOnChange={validationRan}
        validateOnBlur
      />
    </Base>
  );
};
