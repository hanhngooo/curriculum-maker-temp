import React from "react";

export default function School() {
  return (
    <div className="pageContainer">
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-button"
        style={{ width: "100%" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <strong>StudyCard </strong>| Curriculum Maker
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <span className="navbar-text actions">
              {" "}
              <a
                className="btn btn-primary text-justify action-button"
                role="button"
                href="login.html"
              >
                Logout
              </a>
            </span>
          </div>
        </div>
      </nav>
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
            <a href="addstudy.html">
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
