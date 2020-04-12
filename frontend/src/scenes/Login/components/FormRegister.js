import React from "react";
import {Form as FormikForm} from "formik";
import * as Yup from "yup";

import {Form} from "../Login.styled";
import {InputField} from "../../../components/Input/Input";
import {FormikBase} from "./FormBase";
import {ButtonPrimaryLoader} from "../../../components/Button";

const FormRegister = () => (
    <FormikBase
        header={"Register"}
        emptyValues={["firstname", "lastname", "email", "password", "confirmpassword"]}
        schema={values => ({
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
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}>
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <InputField label={"First name"} name={"firstname"} {...props}/>
                <InputField label={"Last name"} name={"lastname"} {...props}/>
                <InputField label={"Email address"} name={"email"} {...props}/>
                <InputField label={"Password"} name={"password"} type={"password"} {...props}/>
                <InputField label={"Confirm password"} name={"confirmpassword"} type={"password"}
                       {...props}/>
                <ButtonPrimaryLoader isLoading={isSubmitting}>Register</ButtonPrimaryLoader>
            </Form>
        )}
    </FormikBase>
);

export default FormRegister;
