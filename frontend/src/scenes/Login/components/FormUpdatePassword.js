import React from "react";
import {Field, Form as FormikForm} from "formik";
import * as Yup from "yup";

import {Button, Form} from "../Login.styled";
import Input from "../../../components/Input/Input";
import {FormikBase} from "./FormBase";

const FormUpdatePassword = () => (
    <FormikBase
        header={"Update Password"}
        emptyValues={["password", "confirmpassword"]}
        schema={values => ({
            password: Yup.string()
                .min(6, "Password must consist of at least 6 characters")
                .max(40, "Password must consist of at most 40 characters")
                .required("Please enter the required field"),
            confirmpassword: Yup.string()
                .matches(new RegExp(values.password), "Passwords must match")
                .required("Please enter the required field")
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}
    >
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <Field as={Input} label={"New password"} name={"password"} type={"password"} {...props}/>
                <Field as={Input} label={"Confirm password"} name={"confirmpassword"} type={"password"}
                       {...props}/>
                <Button disabled={isSubmitting}>Update Password</Button>
            </Form>
        )}
    </FormikBase>
);

export default FormUpdatePassword;
