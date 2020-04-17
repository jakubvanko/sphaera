import {Form as FormikForm, Field} from "formik";
import React, {useState, useRef} from "react";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";
import {SeatSelection} from "../../../components/SeatSelection";
import {TextBig} from "../../../components/TextType";
import {SEATS} from "../../../scripts/constants/seats";
import {MultiColumnForm, AreaInputGroup, AreaInputContainer} from "../Admin.styled";

const defaultValues = SEATS.reduce((
    (previousValue, {name, defaultSeats, defaultPrice, repeated = false, selectable = true}) => {
        if (!repeated && selectable) {
            previousValue["seats" + name] = defaultSeats;
            previousValue["price" + name] = defaultPrice;
        }
        return previousValue;
    }), {});

const FormAddEvent = () => {
    const [currentlyDisplayed, setCurrentlyDisplayed] = useState("1");
    const fileRef = useRef();

    return (
        <FormikBase
            header={"Add Event"}
            emptyValues={["artist", "date", "file"]}
            validate={values => {
                console.log(values);
                console.log(fileRef);
            }}
            initialValues={defaultValues}
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
                    <InputField type={"date"} label={"Date"} name={"date"} labelActive={true} {...props}/>
                    <InputField innerRef={fileRef} type={"file"} label={"File"} name={"file"} labelActive={true} {...props}/>
                    <AreaInputContainer>
                        {SEATS.filter(({repeated = false, selectable = true}) => !repeated && selectable)
                            .map(({name}, index) => (
                                <AreaInputGroup $displayed={name === currentlyDisplayed} key={name + index}>
                                    <TextBig>Area {name}</TextBig>
                                    <InputField type={"number"} label={"Places in area " + name} name={"seats" + name}
                                                labelActive={true} {...props}/>
                                    <InputField type={"number"} label={"Price for area " + name} name={"price" + name}
                                                labelActive={true} {...props}/>
                                </AreaInputGroup>
                            ))}
                        <SeatSelection onSeatSelected={name => setCurrentlyDisplayed(name)}/>
                    </AreaInputContainer>
                    <ButtonPrimaryLoader isLoading={isSubmitting}>Add Event</ButtonPrimaryLoader>
                </MultiColumnForm>
            )}
        </FormikBase>
    )
};
export default FormAddEvent;
