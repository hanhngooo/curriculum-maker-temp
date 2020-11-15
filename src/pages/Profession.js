import React from "react";

export default function Profession() {
  return (
    <div class="pageContainer">
      <div class="main">
        <h3 class="text-info">
          <strong>Professions</strong>
        </h3>
        <div class="main__singleForm">
          <div class="form-group">
            <label>
              <strong>Title</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Description</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Industry</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Tags</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-info text-justify" type="button">
            Add profession
          </button>
        </div>
        <div class="row">
          <div class="col">
            <a href="addCompetency">
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
