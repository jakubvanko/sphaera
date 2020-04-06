import React, {useState} from "react";
import {Formik, Field, Form as FormikForm} from "formik";
import * as Yup from "yup";

import {Button, Form, FormContainer, FormHeader, AdditionalText} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormLogin = ({onFormChange}) => {
    const [wasValidated, setValidated] = useState(false);

    return (
        <FormContainer>
            <FormHeader>
                Log In
            </FormHeader>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validate={() => {
                    setValidated(true);
                }}
                validateOnChange={wasValidated}
                validateOnBlur={true}
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email("Please enter a valid email address")
                            .required("Please enter the required field"),
                        password: Yup.string()
                            .required("Please enter the required field")
                    })
                }
                onSubmit={(values, {setSubmitting}) => {
                    // TODO: CALL AN API
                }}>
                {({isSubmitting, ...props}) => (
                    <Form as={FormikForm}>
                        <Field as={Input} label={"Email address"} name={"email"} {...props}/>
                        <Field as={Input} label={"Password"} name={"password"} type={"password"} {...props}/>
                        <Button type={"submit"} disabled={isSubmitting}>Log in</Button>
                        <AdditionalText onClick={onFormChange}>Forgotten your password?</AdditionalText>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
};

export default FormLogin;
