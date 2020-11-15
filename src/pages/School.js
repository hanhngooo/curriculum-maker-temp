import React from "react";

export default function School() {
  return (
    <div className="pageContainer">
      <div className="main">
        <h3 className="text-info">
          <strong>School</strong>
          <br />
        </h3>
        <div>
          <div className="form-group">
            <label>
              <strong>School name</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Type of School</strong>
              <br />
            </label>
            <select className="form-control">
              <option value="Institute" selected="">
                Institute
              </option>
              <option value="Faculty">Faculty</option>
              <option value="Dependance">Dependance</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <strong>Street name</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>House number</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Postcode</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Country</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Website</strong>
              <br />
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="https://..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href="/addStudy">
              <button className="btn btn-primary text-justify" type="button">
                Next
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
