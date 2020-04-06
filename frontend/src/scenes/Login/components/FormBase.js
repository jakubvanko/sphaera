import React, {useState} from "react";
import {Formik, validateYupSchema, yupToFormErrors} from "formik";
import styled from "styled-components";
import * as Yup from "yup";

const Form = styled.form`
  width: 80vw;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 20px;
  padding: 15px 25px 25px 25px;
  
  @media (min-width: 500px){
    padding: 25px 40px 40px 40px;
  }
  
  @media (min-width: 890px){
    width: 45vw;
  }
  
  @media (min-width: 900px){
    width: 43vw;
  }
  
  @media (min-width: 1100px){
    width: 39vw;
  }
  
  @media (min-width: 1400px){
    width: 35vw;
  }
`;

const FormHeader = styled.h4`
  width: 100%;
  border-bottom: dashed 1px #b2b2b2;
  padding: 20px 25px;
  font-size: 2rem;
  text-transform: capitalize;
  @media (min-width: 500px){
    padding: 30px 40px;
  }
`;

const FormContainer = styled.div`
  border: solid 1px rgb(198, 198, 198);
  border-radius: 4px;
`;

const Base = ({header, children}) => (
    <FormContainer>
        {header && <FormHeader>{header}</FormHeader>}
        {children}
    </FormContainer>
);

export const FormBase = ({header, children}) => (
    <Base header={header}>
        <Form>
            {children}
        </Form>
    </Base>
);

export const FormikBase = ({header, schema, validate, initialValues = {}, emptyValues = [], ...props}) => {
    const [validationRan, setValidationRan] = useState(false);
    for (const value of emptyValues) {
        initialValues[value] = ""
    }

    return (
        <Base header={header}>
            <Formik {...props}
                    initialValues={initialValues}
                    validate={values => {
                        setValidationRan(true);
                        if (validate) validate(values);
                        if (schema) {
                            const validationSchema = Yup.object().shape(schema(values));
                            try {
                                validateYupSchema(values, validationSchema, true);
                            } catch (err) {
                                return yupToFormErrors(err);
                            }
                        }
                    }}
                    validateOnChange={validationRan}
                    validateOnBlur={true}
            >
            </Formik>
        </Base>
    )
};
