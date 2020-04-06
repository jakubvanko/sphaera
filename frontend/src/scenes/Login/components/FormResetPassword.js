import React from "react";
import {Form as FormikForm} from "formik";
import * as Yup from "yup";

import {AdditionalText, Button, Form} from "../Login.styled";
import {InputField} from "../../../components/Input/Input";
import {FormikBase} from "./FormBase";

const FormResetPassword = ({onFormChange}) => (
    <FormikBase
        header={"Reset Password"}
        emptyValues={["email"]}
        schema={() => ({
            email: Yup.string()
                .email("Please enter a valid email address")
                .required("Please enter the required field")
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}
    >
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <InputField label={"Email address"} name={"email"} {...props}/>
                <Button>Reset password</Button>
                <AdditionalText onClick={onFormChange}>Log in with your password instead.</AdditionalText>
            </Form>
        )}
    </FormikBase>
);

export default FormResetPassword;
