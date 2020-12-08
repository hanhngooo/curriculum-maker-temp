import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Form.css";

import ContinueButton from "../components/ContinueButton";
import SaveButton from "../components/SaveButton";
import SideBarStep from "../components/SideBarStep";
import SideBarOverview from "../components/SideBarOverview";
import TagInput from "../components/TagInput/TagInput";

import { addProfession } from "../store/user/actions";
import { selectProfession } from "../store/user/selectors";

export default function Profession() {
  const [continueButton, setContinueButton] = useState(false);
  const dispatch = useDispatch();
  const professions = useSelector(selectProfession);

  let validationSchema = yup.object().shape({
    professionTitle: yup.string().required("This field is required."),
    professionDescription: yup.string().required("This field is required."),
    industry: yup.string().required("This field is required."),
  });
  const initialValues = {
    professionTitle: "",
    professionDescription: "",
    industry: "",
    professionTags: "",
  };
  //prevent submit when press Enter
  function onKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }
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
              <strong>Professions</strong>
              <br />
            </h3>
            <div className="main__singleForm">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (data, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  console.log("profile", data);
                  dispatch(addProfession(data));
                  resetForm();
                  setContinueButton(true);
                  setSubmitting(false);
                }}
              >
                {({ values, isSubmitting, setFieldValue, isValid }) => (
                  <Form onKeyDown={onKeyDown}>
                    <div className="form-group">
                      <label>Profession Title</label>
                      <Field
                        className="form-control"
                        name="professionTitle"
                        type="text"
                      />
                      <ErrorMessage
                        name="professionTitle"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>Profession Description</label>
                      <Field
                        className="form-control"
                        name="professionDescription"
                        type="text"
                      />
                      <ErrorMessage
                        name="professionDescription"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>Industry</label>
                      <Field
                        className="form-control"
                        name="industry"
                        type="text"
                      />
                      <ErrorMessage
                        name="industry"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>Profession Tags</label>
                      {/* <Field
                        className="form-control"
                        name="professionTags"
                        type="text"
                      /> */}
                      <TagInput
                        type="text"
                        className="form-control"
                        name="professionTags"
                        value={values.professionTags}
                        setFieldValue={setFieldValue}
                      />
                      <ErrorMessage
                        name="professionTags"
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
                        <strong>Overview: profession Profiles</strong>
                      </h6>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Profession Title</th>
                              <th>Description</th>
                              <th>Industry</th>
                              <th>Tags</th>
                            </tr>
                          </thead>
                          <tbody>
                            {professions
                              ? professions.map((profession, index) => (
                                  <tr key={index}>
                                    <td>{profession.professionTitle}</td>
                                    <td>{profession.professionDescription}</td>
                                    <td>{profession.industry}</td>
                                    <td>
                                      {profession.professionTags.join(", ")}
                                    </td>
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
