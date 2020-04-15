import {Form as FormikForm} from "formik";
import React from "react";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase, Form} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";

const FormAddEvent = () => (
    <FormikBase
        header={"Add Event"}
        emptyValues={["artist", "date"]}
        schema={values => ({
            artist: Yup.string()
                .min(2, "Please enter a valid artist")
                .max(40, "Please enter a valid artist")
                .required("Please enter the required field"),
            date: Yup.date()
                .min(new Date(Date.now()).toISOString(), "Date must be in the future")
                .required("Please enter the required field")
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}>
        {({isSubmitting, ...props}) => (
            <Form as={FormikForm}>
                <InputField label={"Artist"} name={"artist"} {...props}/>
                <InputField type={"date"} label={"Date"} name={"date"} labelActive={true} {...props}/>
                <ButtonPrimaryLoader isLoading={isSubmitting}>Add Event</ButtonPrimaryLoader>
            </Form>
        )}
    </FormikBase>
);

export default FormAddEvent;
