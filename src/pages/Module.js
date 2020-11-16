import React from "react";

export default function Module() {
  return (
    <div class="pageContainer">
      <div class="main">
        <h3 class="text-info">
          <strong>Modules</strong>
        </h3>
        <div class="main__singleForm">
          <div class="form-group">
            <label>
              <strong>Module Title</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Module Description</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Module Code</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-xl-3">
              <div class="form-group">
                <label>
                  <strong>Number of ECTS</strong>
                  <br />
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-3">
              <div class="form-group">
                <label>
                  <strong>Number of hours</strong>
                  <br />
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-xl-4">
              <label class="col-form-label">
                <strong>International-EQF - Level</strong>
                <br />
              </label>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-4">
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-1"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Course
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-3"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Training
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-2"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Webinar
                  </label>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-4">
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-4"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Workshop
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-5"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Masterclass
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="formCheck-6"
                  />
                  <label class="form-check-label normal" for="formCheck-1">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="form-group">
                <label>
                  <strong>Connected to other module?</strong>
                  <br />
                </label>
                <select class="form-control">
                  <option value="Yes" selected="">
                    Yes
                  </option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6">
              <div class="form-group">
                <label>
                  Select module
                  <br />
                </label>
                <select class="form-control">
                  <option value="Module A" selected="">
                    Module A
                  </option>
                  <option value="Module B">Module B</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-xl-6">
            <div class="form-group">
              <label>
                <strong>Add Module Learning Outcome</strong>
                <br />
              </label>
              <select class="form-control">
                <option value="SLO 1" selected="">
                  SLO 1
                </option>
                <option value="SLO 2">SLO 2</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-info" type="button">
            Add another module
          </button>
        </div>
        <div class="row">
          <div class="col">
            <a href="/addTeacher">
              <button class="btn btn-primary text-justify" type="button">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
