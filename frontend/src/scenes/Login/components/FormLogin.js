import React from "react";
import {Form as FormikForm} from "formik";
import * as Yup from "yup";

import {Button, Form, AdditionalText} from "../Login.styled";
import {InputField} from "../../../components/Input/Input";
import {FormikBase} from "./FormBase";

const FormLogin = ({onFormChange}) => (
    <FormikBase
        header={"Log In"}
        emptyValues={["email", "password"]}
        schema={() => ({
            email: Yup.string()
                .email("Please enter a valid email address")
                .required("Please enter the required field"),
            password: Yup.string()
                .required("Please enter the required field")
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}
    >
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <InputField label={"Email address"} name={"email"} {...props}/>
                <InputField label={"Password"} name={"password"} type={"password"} {...props}/>
                <Button type={"submit"} disabled={isSubmitting}>Log in</Button>
                <AdditionalText onClick={onFormChange}>Forgotten your password?</AdditionalText>
            </Form>
        )}
    </FormikBase>
);

export default FormLogin;
