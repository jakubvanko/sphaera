import React from "react";
import {Formik, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

import {Button, FormikForm, FormContainer, FormHeader, AdditionalText} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormLogin = ({onFormChange}) => (
    <FormContainer>
        <FormHeader>
            Log In
        </FormHeader>
        <Formik initialValues={{email: "", password: ""}}
                validationSchema={Yup.object().shape({
                    email: Yup.string()
                        .email('Please enter a valid email address')
                        .required('Please enter the required field'),
                    password: Yup.string()
                        .required("Please enter the required field")
                })} validateOnChange={false} validateOnBlur={false}
                onSubmit={(values, {setSubmitting}) => {
                    // TODO: Call an API!
                }}>
            {({isSubmitting}) => (
                <FormikForm>
                    <Field as={Input} label={"Email address"} name={"email"}/>
                    <ErrorMessage name={"email"}/>
                    <Field as={Input} label={"Password"} name={"password"} type={"password"}/>
                    <ErrorMessage name={"password"}/>
                    <Button type={"submit"} disabled={isSubmitting}>Log in</Button>
                    <AdditionalText onClick={onFormChange}>Forgotten your password?</AdditionalText>
                </FormikForm>
            )}
        </Formik>
    </FormContainer>
);

export default FormLogin;
