import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md navigation-clean-button"
        style={{ width: "100%" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
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
    </div>
  );
}
