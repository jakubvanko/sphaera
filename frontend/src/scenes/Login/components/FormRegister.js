import React, {useState} from "react";
import {Formik, Field, Form as FormikForm, validateYupSchema, yupToFormErrors} from "formik";
import * as Yup from "yup";

import {Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";

const FormRegister = () => {
    const [wasValidated, setValidated] = useState(false);

    return (
        <FormContainer>
            <FormHeader>
                Register
            </FormHeader>
            <Formik
                initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmpassword: ""
                }}
                validate={(values) => {
                    setValidated(true);
                    const validationSchema = Yup.object().shape({
                        firstname: Yup.string()
                            .max(40, "Please enter a valid name")
                            .required("Please enter the required field"),
                        lastname: Yup.string()
                            .max(40, "Please enter a valid name")
                            .required("Please enter the required field"),
                        email: Yup.string()
                            .email("Please enter a valid email address")
                            .required("Please enter the required field"),
                        password: Yup.string()
                            .min(6, "Password must consist of at least 6 characters")
                            .max(40, "Password must consist of at most 40 characters")
                            .required("Please enter the required field"),
                        confirmpassword: Yup.string()
                            .matches(new RegExp(values.password), "Passwords must match")
                            .required("Please enter the required field")
                    });
                    try {
                        validateYupSchema(values, validationSchema, true);
                    } catch (err) {
                        return yupToFormErrors(err);
                    }
                }}
                validateOnChange={wasValidated}
                validateOnBlur={true}
                onSubmit={(values, {setSubmitting}) => {
                    // TODO: CALL AN API
                }}>
                {({isSubmitting, ...props}) => (
                    <Form as={FormikForm}>
                        <Field as={Input} label={"First name"} name={"firstname"} {...props}/>
                        <Field as={Input} label={"Last name"} name={"lastname"} {...props}/>
                        <Field as={Input} label={"Email address"} name={"email"} {...props}/>
                        <Field as={Input} label={"Password"} name={"password"} type={"password"} {...props}/>
                        <Field as={Input} label={"Confirm password"} name={"confirmpassword"} type={"password"}
                               {...props}/>
                        <Button disabled={isSubmitting}>Register</Button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
};

export default FormRegister;
