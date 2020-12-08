import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addStudy } from "../store/user/actions";
import { selectStudy } from "../store/user/selectors";
import * as yup from "yup";

import CalculatedField from "./CalculatedField";
import SaveButton from "../components/SaveButton";
import SideBarStep from "../components/SideBarStep";
import SideBarOverview from "../components/SideBarOverview";
import ContinueButton from "../components/ContinueButton";
import TagInput from "../components/TagInput/TagInput";

function Study() {
  const [continueButton, setContinueButton] = useState(false);
  const dispatch = useDispatch();
  const studies = useSelector(selectStudy);

  let validationSchema = yup.object().shape({
    studyName: yup.string().required("This field is required."),
    studyDescription: yup.string().required("This field is required."),
    // schoolTags: yup.array().required("This field is required."),
    // nationalEQFLevel: yup.number().required("This field is required."),
    // nationalEQFName: yup.string().required("This field is required."),
    // internationalEQFLevel: yup.number().required("This field is required."),
    // internationalEQFName: yup.string().required("This field is required."),
    // duration: yup.number().required("This field is required."),
    // ectPerYear: yup.number().required("This field is required."),
    // ectTotal: yup.number().required("This field is required."),
    // ectHours: yup.string().required("This field is required."),
  });

  const initialValues = {
    studyName: "",
    studyDescription: "",
    studyTags: [],
    nationalEQFLevel: "",
    nationalEQFName: "",
    internationalEQFLevel: "",
    internationalEQFName: "",
    duration: "",
    ectPerYear: "",
    ectTotal: "",
    ectHours: "",
  };
  // const selectedTags = tags;

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
              <strong>Study</strong>
            </h3>
            <div className="main__singleForm">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  console.log("submit data: ", data);
                  dispatch(addStudy(data));
                  resetForm();
                  setContinueButton(true);
                }}
              >
                {({
                  values,
                  isSubmitting,
                  handleChange,
                  setFieldValue,
                  isValid,
                }) => (
                  <Form onKeyDown={onKeyDown}>
                    <div className="form-group">
                      <label>
                        <strong>Study Name</strong>
                        <br />
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="studyName"
                      />
                      <ErrorMessage
                        name="studyName"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Study Description</strong>
                        <br />
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="studyDescription"
                      />
                      <ErrorMessage
                        name="studyDescription"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Study Tags</strong>
                        <br />
                      </label>
                      <TagInput
                        type="text"
                        className="form-control"
                        name="studyTags"
                        value={values.studyTags}
                        setFieldValue={setFieldValue}
                        // component={TagInput}
                      />
                      <ErrorMessage
                        name="studyTags"
                        component="span"
                        className="error"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>National EQF - Level</strong>
                            <br />
                          </label>
                          <Field
                            className="form-control"
                            as="select"
                            name="nationalEQFLevel"
                          >
                            <option>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </Field>
                          <ErrorMessage
                            name="nationalEQFLevel"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>National EQF - Name</strong>
                            <br />
                          </label>
                          <Field
                            type="text"
                            name="nationalEQFName"
                            className="form-control"
                            placeholder="E.g. HBO"
                          />
                          <ErrorMessage
                            name="nationalEQFName"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>International-EQF - Level</strong>
                            <br />
                          </label>
                          <Field
                            as="select"
                            name="internationalEQFLevel"
                            className="form-control"
                          >
                            <option>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </Field>
                          <ErrorMessage
                            name="internationalEQFLevel"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>International-EQF-Name</strong>
                            <br />
                          </label>
                          <Field
                            type="text"
                            name="internationalEQFName"
                            className="form-control"
                            placeholder="E.g. Bachelor"
                          />
                          <ErrorMessage
                            name="internationalEQFName"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>Duration in years</strong>
                            <br />
                          </label>
                          <Field
                            type="number"
                            name="duration"
                            className="form-control"
                            placeholder="E.g. 3"
                          />
                          <ErrorMessage
                            name="duration"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>ECTS-credits per year</strong>
                            <br />
                          </label>
                          <Field
                            type="text"
                            name="ectPerYear"
                            className="form-control"
                            placeholder="E.g. 60"
                          />
                          <ErrorMessage
                            name="ectPerYear"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>ECTS total</strong>
                            <br />
                          </label>
                          <CalculatedField
                            type="number"
                            name="ectTotal"
                            defaulValue="1"
                            value={values.ectTotal}
                            values={values}
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="ectTotal"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                      <div className="col-sm-3 col-md-6 col-xl-3">
                        <div className="form-group">
                          <label>
                            <strong>ECTS converted into hours</strong>
                            <br />
                          </label>
                          <CalculatedField
                            type="number"
                            name="ectHours"
                            value={values.ectHours}
                            values={values}
                            setFieldValue={setFieldValue}
                            onChange={handleChange}
                          />
                          <ErrorMessage
                            name="ectHours"
                            component="span"
                            className="error"
                          />
                        </div>
                      </div>
                    </div>
                    <SaveButton
                      dataName="Study"
                      disabled={isSubmitting && isValid}
                    />
                    <div>
                      <h6>
                        <strong>Overview: Study</strong>
                      </h6>
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Study</th>
                              <th>National EQF Level</th>
                              <th>National EQF Name</th>

                              <th>ETCS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {studies
                              ? studies.map((study, index) => (
                                  <tr key={index}>
                                    <td>{study.studyName}</td>
                                    <td>{study.nationalEQFLevel}</td>
                                    <td> {study.nationalEQFName}</td>
                                    <td>{study.ectTotal}</td>
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
            {continueButton ? (
              <ContinueButton url="/addGraduatePofiles" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Study;
