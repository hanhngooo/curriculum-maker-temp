import React from "react";

export default function Competency() {
  return (
    <div className="pageContainer">
      <div className="main">
        <h3 className="text-info">
          <strong>Competencies</strong>
        </h3>
        <div className="main__singleForm">
          <div className="form-group">
            <label>
              <strong>Competency title</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Competency description</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="text-left" style={{ fontSize: "15px" }}>
                <th>
                  <strong>Competence Levels</strong>
                </th>
                <th className="text-center" style={{ width: "130px" }}>
                  <strong>Level 1</strong>
                </th>
                <th className="text-center" style={{ width: "130px" }}>
                  <strong>Level 2</strong>
                </th>
                <th className="text-center" style={{ width: "130px" }}>
                  <strong>Level 3</strong>
                </th>
                <th className="text-center" style={{ width: "130px" }}>
                  <strong>Level 4</strong>
                </th>
                <th style={{ width: "130px", textAlign: "center" }}>
                  <strong>Dublin descriptors</strong>
                </th>
                <th style={{ width: "130px", textAlign: "center" }}>
                  Skill tags
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ fontSize: "15px" }}>
                  <strong>Criterion A</strong>
                  <br />
                </th>
                <td style={{ fontSize: "15px" }}></td>
                <td style={{ fontSize: "15px" }}></td>
                <td style={{ fontSize: "15px" }}></td>
                <td style={{ fontSize: "15px" }}></td>
                <td style={{ fontSize: "15px" }}></td>
                <td style={{ fontSize: "15px" }}></td>
              </tr>
              <tr style={{ fontSize: "15px" }}>
                <th style={{ fontSize: "15px" }}>
                  Description criterion A1
                  <br />
                </th>
                <td
                  className="flex-fill justify-content-center align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td
                  className="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px", textAlign: "center" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td
                  className="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
              </tr>
              <tr style={{ fontSize: "15px" }}>
                <th style={{ fontSize: "15px" }}>
                  Description criterion A2
                  <br />
                </th>
                <td
                  className="flex-fill justify-content-center align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td
                  className="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px", textAlign: "center" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td
                  className="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-info text-justify" type="button">
            Add another competency
          </button>
        </div>
        <div className="row">
          <div className="col">
            <a href="/addStudyYear">
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
