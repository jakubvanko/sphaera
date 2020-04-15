import {Form as FormikForm} from "formik";
import React from "react";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase, Form} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";
import {AdditionalText} from "../Login.styled";

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
                <ButtonPrimaryLoader isLoading={isSubmitting}>Reset password</ButtonPrimaryLoader>
                <AdditionalText onClick={onFormChange}>Log in with your password instead.</AdditionalText>
            </Form>
        )}
    </FormikBase>
);

export default FormResetPassword;
