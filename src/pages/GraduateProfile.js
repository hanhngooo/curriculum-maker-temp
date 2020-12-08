import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Form.css";

import ContinueButton from "../components/ContinueButton";
import SaveButton from "../components/SaveButton";
import SideBarStep from "../components/SideBarStep";
import SideBarOverview from "../components/SideBarOverview";
import { addGraduateProfile } from "../store/user/actions";
import { selectGraduateProfile } from "../store/user/selectors";

export default function GraduateProfiles() {
  const [continueButton, setContinueButton] = useState(false);
  const dispatch = useDispatch();
  const graduateProfiles = useSelector(selectGraduateProfile);

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
                  dispatch(addGraduateProfile(data));
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
                    <div>
                      <h6>
                        <strong>Overview: Graduate Profiles</strong>
                      </h6>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {graduateProfiles
                              ? graduateProfiles.map((profile, index) => (
                                  <tr key={index}>
                                    <td>{profile.graduateTitle}</td>
                                    <td>{profile.graduateDescription}</td>
                                  </tr>
                                ))
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>
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
