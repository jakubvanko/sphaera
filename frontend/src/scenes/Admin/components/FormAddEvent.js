import {Form as FormikForm} from "formik";
import React, {useState, useRef} from "react";
import {connect} from "react-redux";
import * as Yup from "yup";

import {ButtonPrimaryLoader} from "../../../components/Button";
import {FormikBase} from "../../../components/FormBase";
import {InputField} from "../../../components/Input/Input";
import {SeatSelection} from "../../../components/SeatSelection";
import {TextBig} from "../../../components/TextType";
import {SEATS, VIEWBOX} from "../../../scripts/constants/seats";
import {MultiColumnForm, AreaInputGroup, AreaInputContainer} from "../Admin.styled";
import {createRequest} from "../../../redux/actionCreators/event";

const defaultValues = SEATS.reduce((
    (previousValue, {name, defaultSeats, defaultPrice, repeated = false, selectable = true}) => {
        if (!repeated && selectable) {
            previousValue["input_seats_" + name] = defaultSeats;
            previousValue["input_price_" + name] = defaultPrice;
        }
        return previousValue;
    }), {});
const filteredSeats = SEATS.filter(({repeated = false, selectable = true}) => !repeated && selectable);

const FormAddEvent = ({createPending, createRequest}) => {
    const [currentlyDisplayed, setCurrentlyDisplayed] = useState("1");
    const fileRef = useRef();

    return (
        <FormikBase
            header={"Add Event"}
            emptyValues={["artist", "date", "file"]}
            validate={values => {
                const errors = {};
                const file = fileRef.current.files[0];
                if (file.type !== "image/jpeg" && file.type !== "image/png") {
                    errors.file = "Image must be either in .jpeg or .png type"
                }
                return errors;
            }}
            initialValues={defaultValues}
            schema={() => ({
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
            onSubmit={(values, {resetForm}) => {
                const file = fileRef.current.files[0];
                const {artist, date} = values;
                const areas = [];
                for (let [key, value] of Object.entries(values)) {
                    if (!key.startsWith("input_price_")) continue;
                    const areaName = key.split("_")[2];
                    areas.push({
                        name: areaName,
                        price: value,
                        capacity: values["input_seats_" + areaName]
                    })
                }
                createRequest(artist, date, file, areas);
                resetForm();
            }}>
            {({isSubmitting, ...props}) => (
                <MultiColumnForm as={FormikForm}>
                    <InputField label={"Artist"} name={"artist"} {...props}/>
                    <InputField type={"date"} label={"Date"} name={"date"} labelActive={true} {...props}/>
                    <InputField innerRef={fileRef} type={"file"} label={"File"} name={"file"}
                                labelActive={true} {...props}/>
                    <AreaInputContainer>
                        {filteredSeats.map(({name}, index) => (
                            <AreaInputGroup $displayed={name === currentlyDisplayed} key={name + index}>
                                <TextBig>Area {name}</TextBig>
                                <InputField type={"number"} label={"Places in area " + name}
                                            name={"input_seats_" + name}
                                            labelActive={true} {...props}/>
                                <InputField type={"number"} label={"Price for area " + name}
                                            name={"input_price_" + name}
                                            labelActive={true} {...props}/>
                            </AreaInputGroup>
                        ))}
                        <SeatSelection layout={SEATS} viewbox={VIEWBOX}
                                       onSeatSelected={name => setCurrentlyDisplayed(name)}/>
                    </AreaInputContainer>
                    <ButtonPrimaryLoader isLoading={createPending}>Add Event</ButtonPrimaryLoader>
                </MultiColumnForm>
            )}
        </FormikBase>
    )
};
export default connect(({event}) => ({createPending: event.createPending}), {createRequest})(FormAddEvent);
