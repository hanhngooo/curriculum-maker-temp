import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addStudy } from "../store/user/actions";
import { selectStudy } from "../store/user/selectors";

import CalculatedField from "./CalculatedField";
import SaveButton from "../components/SaveButton";
import SideBarStep from "../components/SideBarStep";
import SideBarOverview from "../components/SideBarOverview";
import ContinueButton from "../components/ContinueButton";
import TagInput from "../components/TagInput/TagInput";

function Study() {
  const [continueButton, setContinueButton] = useState(false);
  const dispatch = useDispatch();
  const study = useSelector(selectStudy);

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
                onSubmit={(data, { setSubmitting, resetForm }) => {
                  setSubmitting(true);
                  console.log("submit data: ", data);
                  dispatch(addStudy(data));
                  resetForm();
                  setContinueButton(true);
                }}
              >
                {({ values, isSubmitting, handleChange, setFieldValue }) => (
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
                    </div>
                    <div className="form-group">
                      <label>
                        <strong>Study Tags</strong>
                        <br />
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        name="studyTags"
                        setFieldValue={setFieldValue}
                        component={TagInput}
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
                        </div>
                      </div>
                    </div>
                    <SaveButton
                      dataName="Study"
                      disabled={isSubmitting}
                      // onClick={() => handleSubmit()}
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
                            <tr>
                              {study ? (
                                <>
                                  <td>{study.studyName}</td>
                                  <td>{study.nationalEQFLevel}</td>
                                  <td> {study.nationalEQFName}</td>
                                  <td>{study.ectTotal}</td>
                                </>
                              ) : null}
                            </tr>
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
