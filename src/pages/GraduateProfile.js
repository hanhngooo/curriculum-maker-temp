import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import { Radio, FormControlLabel } from "@material-ui/core";
import * as yup from "yup";
import "./Form.css";

import ContinueButton from "../components/ContinueButton";
import SaveButton from "../components/SaveButton";
import SideBarStep from "../components/SideBarStep";
import SideBarOverview from "../components/SideBarOverview";
import { addSchool } from "../store/user/actions";
// import { selectSchool } from "../store/user/selectors";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default function School() {
  const [continueButton, setContinueButton] = useState(false);
  const dispatch = useDispatch();

  let validationSchema = yup.object().shape({
    graduateTitle: yup.string().required("This field is required."),
    graduateDescription: yup.string().required("This field is required."),
  });
  const initialValues = {
    graduateTitle: "",
    graduateDescription: "",
  };

  return (
    <div className="pageContainer">
      <div className="row">
        <div className="col-xl-2 side-bar-left">
          <SideBarOverview />
          <SideBarStep />
        </div>

        <div className="col">
          <div className="main">
            <h3 className="text-info">
              <strong>Study</strong>
              <br />
            </h3>
            <div className="main__singleForm">
              <h5 className="text-info">
                <strong>Graduate Profiles</strong>
              </h5>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (data, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  console.log("profile", data);
                  // dispatch(addSchool(filteredData));
                  resetForm();
                  setContinueButton(true);
                  setSubmitting(false);
                }}
              >
                {({ values, isSubmitting, isValid }) => (
                  <Form>
                    <div className="form-group">
                      <label>Graduate Title</label>
                      <Field
                        className="form-control"
                        name="graduateTitle"
                        type="text"
                      />
                      <ErrorMessage
                        name="graduateTitle"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>Graduate Description</label>
                      <Field
                        className="form-control"
                        name="graduateDescription"
                        type="text"
                      />
                      <ErrorMessage
                        name="graduateDescription"
                        component="span"
                        className="error"
                      />
                    </div>
                    <SaveButton
                      dataName="school"
                      disabled={isSubmitting && isValid}
                    />
                  </Form>
                )}
              </Formik>
            </div>
            {continueButton ? <ContinueButton url="/addStudy" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
