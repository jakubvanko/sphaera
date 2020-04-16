import {Form as FormikForm} from "formik";
import React from "react";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";
import {MultiColumnForm, SeatInputContainer} from "../Admin.styled";
import {SEATS} from "../../../scripts/constants/seats";

const FormAddEvent = () => (
    <FormikBase
        header={"Add Event"}
        emptyValues={["artist", "date", "file"]}
        schema={values => ({
            artist: Yup.string()
                .min(2, "Please enter a valid artist")
                .max(40, "Please enter a valid artist")
                .required("Please enter the required field"),
            date: Yup.date()
                .min(new Date(Date.now()).toISOString(), "Date must be in the future")
                .required("Please enter the required field"),
            file: Yup.mixed()
                .required("Please enter the required field")
        })}
        onSubmit={(values, {setSubmitting}) => {
            // TODO: CALL AN API
        }}>
        {({isSubmitting, ...props}) => (
            <MultiColumnForm as={FormikForm}>
                <InputField label={"Artist"} name={"artist"} {...props}/>
                <div style={{gridArea: "date"}}>
                    <InputField type={"date"} label={"Date"} name={"date"} labelActive={true} {...props}/>
                </div>
                <div style={{gridArea: "file"}}>
                    <InputField type={"file"} label={"File"} name={"file"} labelActive={true} {...props}/>
                </div>
                <SeatInputContainer>
                    {SEATS.filter(({repeated = false, selectable = true}) => !repeated && selectable).map(({name}) => (
                        <InputField type={"number"} label={"Area " + name} name={name} labelActive={true} {...props}/>
                    ))}
                </SeatInputContainer>
                <ButtonPrimaryLoader isLoading={isSubmitting}>Add Event</ButtonPrimaryLoader>
            </MultiColumnForm>
        )}
    </FormikBase>
);
export default FormAddEvent;
