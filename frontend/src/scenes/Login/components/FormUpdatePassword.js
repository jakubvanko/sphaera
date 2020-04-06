import React, {useState} from "react";
import {Button, Form, FormContainer, FormHeader} from "../Login.styled";
import Input from "../../../components/Input/Input";
import {Field, Form as FormikForm, Formik, validateYupSchema, yupToFormErrors} from "formik";
import * as Yup from "yup";

const FormUpdatePassword = () => {
    const [wasValidated, setValidated] = useState(false);

    return (
        <FormContainer>
            <FormHeader>
                Update Password
            </FormHeader>
            <Formik
                initialValues={{
                    password: "",
                    confirmpassword: ""
                }}
                validate={(values) => {
                    setValidated(true);
                    const validationSchema = Yup.object().shape({
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
                        <Field as={Input} label={"New password"} name={"password"} type={"password"} {...props}/>
                        <Field as={Input} label={"Confirm password"} name={"confirmpassword"} type={"password"}
                               {...props}/>
                        <Button disabled={isSubmitting}>Update Password</Button>
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
};

export default FormUpdatePassword;
