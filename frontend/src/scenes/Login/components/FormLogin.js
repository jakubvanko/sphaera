import {Form as FormikForm} from "formik";
import React from "react";
import {connect} from "react-redux";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase, Form} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";
import {AdditionalText} from "../Login.styled";

import {userLogin} from "../../../redux/__old/userLogin";

const FormLogin = ({onFormChange, userLogin}) => (
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
            const {email, password} = values;
            userLogin(email, password);
            setSubmitting(false);
        }}
    >
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <InputField label={"Email address"} name={"email"} {...props}/>
                <InputField label={"Password"} name={"password"} type={"password"} {...props}/>
                <ButtonPrimaryLoader type={"submit"} isLoading={isSubmitting}>Log in</ButtonPrimaryLoader>
                <AdditionalText onClick={onFormChange}>Forgotten your password?</AdditionalText>
            </Form>
        )}
    </FormikBase>
);

export default connect(null, {userLogin})(FormLogin);
