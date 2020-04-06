import React, {useState} from "react";
import {Formik, Form as FormikForm, Field} from "formik";
import {AdditionalText, Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";
import * as Yup from "yup";

const FormResetPassword = ({onFormChange}) => {
    const [wasValidated, setValidated] = useState(false);

    return (
        <FormContainer>
            <FormHeader>
                Reset Password
            </FormHeader>
            <Formik
                initialValues={{
                    email: ""
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
                            .required("Please enter the required field")
                    })
                }
                onSubmit={(values, {setSubmitting}) => {
                    // TODO: CALL AN API
                }}>
                {({isSubmitting, ...props}) => (
                    <Form as={FormikForm}>
                        <Field as={Input} label={"Email address"} name={"email"} {...props}/>
                        <Button>Reset password</Button>
                        <AdditionalText onClick={onFormChange}>Log in with your password instead.</AdditionalText>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
};

export default FormResetPassword;
