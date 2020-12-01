import React, { useState } from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { Radio, FormControlLabel } from "@material-ui/core";
import * as yup from "yup";
import "./Form.css";

import ContinueButton from "../components/ContinueButton";
import SaveButton from "../components/SaveButton";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default function School() {
  const [continueButton, setContinueButton] = useState(false);
  let validationSchema = yup.object().shape({
    schoolName: yup.string().required("This field is required."),
    schoolType: yup.string().required("This field is required."),
    schoolTypeOther: yup.string().when("schoolType", {
      is: (schoolType) => schoolType === "other",
      then: yup.string().required("Please specify school type."),
    }),
    streetName: yup.string().required("This field is required."),
    houseNumber: yup.string().required("This field is required."),
    country: yup.string().required("This field is required."),
  });
  const initialValues = {
    schoolName: "",
    schoolType: "",
    schoolTypeOther: "",
    streetName: "",
    houseNumber: "",
    addition: "",
    postcode: "",
    country: "",
    website: "",
  };

  return (
    <div className="pageContainer">
      <div className="main">
        <h3 className="text-info">
          <strong>School</strong>
          <br />
        </h3>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              if (data.schoolTypeOther !== "") {
                data.schoolType = data.schoolTypeOther;
                const { schoolTypeOther, ...filteredData } = data;
                console.log("submit data: ", filteredData);
                resetForm();
                setContinueButton(true);
              } else {
                const { schoolTypeOther, ...filteredData } = data;
                console.log("submit data: ", filteredData);
                resetForm();
                setContinueButton(true);
              }

              setSubmitting(false);
            }}
          >
            {({ values, isSubmitting, errors, isValid, dirty }) => (
              <Form>
                <div className="form-group">
                  <label>School name</label>
                  <Field
                    className="form-control"
                    name="schoolName"
                    type="text"
                  />
                  <ErrorMessage
                    name="schoolName"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label>Type of School</label>
                  <div>
                    {" "}
                    <MyRadio
                      name="schoolType"
                      value="institute"
                      label="Institute"
                      type="radio"
                    />
                    <MyRadio
                      name="schoolType"
                      value="faculty"
                      label="Faculty"
                      type="radio"
                    />
                    <MyRadio
                      name="schoolType"
                      value="other"
                      label="Other. Please specify."
                      type="radio"
                    />
                    {values.schoolType === "other" ? (
                      <div>
                        <Field
                          className="form-control"
                          name="schoolTypeOther"
                          type="text"
                          placeholder="Enter school type..."
                        />
                        <ErrorMessage
                          name="schoolTypeOther"
                          component="span"
                          className="error"
                        />
                      </div>
                    ) : null}
                  </div>
                  <ErrorMessage
                    name="schoolType"
                    component="span"
                    className="error"
                  />
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-xl-6">
                    <div className="form-group">
                      <label>Street name</label>
                      <Field
                        className="form-control"
                        name="streetName"
                        type="text"
                      />
                      <ErrorMessage
                        name="streetName"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>House Number</label>
                      <Field
                        className="form-control"
                        name="houseNumber"
                        type="number"
                      />
                      <ErrorMessage
                        name="houseNumber"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label>Addition</label>
                      <Field
                        className="form-control"
                        name="addition"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>Postcode</label>
                      <Field
                        className="form-control"
                        name="postcode"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Country</label>
                      <Field
                        className="form-control"
                        name="country"
                        type="text"
                      />
                      <ErrorMessage
                        name="country"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <Field
                    className="form-control"
                    name="website"
                    type="text"
                    placeholder="http://..."
                  />
                </div>
                <SaveButton
                  dataName="school"
                  disabled={isSubmitting && isValid}
                />
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </div>

        {continueButton ? <ContinueButton url="/addStudy" /> : null}
      </div>
    </div>
  );
}
