import React from "react";

export default function SLO() {
  return (
    <div>
      <div className="modal fade" role="dialog" tabindex="-1" id="modal1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add SLO</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <p className="sloTitle__left">
                  <strong>Dublin descriptor</strong>
                  <br />
                  <strong>Competence criterion&nbsp;</strong>
                  <br />
                  <strong>Competence criterion</strong>
                  <br />
                </p>
                <p className="sloValue__right">
                  ABC
                  <br />A<br />
                  A1
                </p>
                <div className="form-group">
                  <label>
                    <strong>Select Taxonomy</strong>
                    <br />
                  </label>
                  <select className="form-control">
                    <option value="Create" selected="">
                      Create
                    </option>
                    <option value="Evaluate">Evaluate</option>
                    <option value="Analyze">Analyze</option>
                    <option value="Apply">Apply</option>
                    <option value="Understand">Understand</option>
                    <option value="Remember">Remember</option>
                  </select>
                </div>
                <label>
                  <strong>Define outcomes</strong>
                  <br />
                </label>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label>
                        <strong>Outcome 1</strong>
                        <br />
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-info text-justify d-flex justify-content-center align-items-center"
                      type="button"
                      style={{ width: "31px", height: "33px" }}
                    >
                      <i className="fa fa-plus d-lg-flex justify-content-center align-content-center align-self-center align-items-lg-center"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-light"
                type="button"
                data-dismiss="modal"
              >
                Close
              </button>
              <button className="btn btn-primary" type="button">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pageContainer">
        <div className="main">
          <h3 className="text-info">
            <strong>Study Learning Outcomes (SLO)&nbsp;</strong>
            <br />
          </h3>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr className="text-left" style={{ fontSize: "15px" }}>
                  <th style={{ width: "150px" }}>
                    <strong>Competencies</strong>
                  </th>
                  <th className="text-center" style={{ width: "130px" }}>
                    Description
                  </th>
                  <th className="text-center" style={{ width: "130px" }}>
                    <strong># SLO's</strong>
                    <br />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th style={{ fontSize: "15px" }}>
                    <strong>Competence A</strong>
                    <br />
                  </th>
                  <th style={{ fontSize: "15px" }}>
                    <br />
                  </th>
                  <th style={{ fontSize: "15px" }}>
                    <strong>&nbsp;</strong>
                    <br />
                  </th>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <th style={{ fontSize: "15px" }}>
                    Criterion A1
                    <br />
                  </th>
                  <td
                    className="flex-fill justify-content-center align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                  <td
                    className="align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <th style={{ fontSize: "15px" }}>
                    Criterion A2
                    <br />
                  </th>
                  <td
                    className="flex-fill justify-content-center align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                  <td
                    className="align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                </tr>
                <tr>
                  <th style={{ fontSize: "15px" }}>
                    <strong>Competence B</strong>
                    <br />
                  </th>
                  <th style={{ fontSize: "15px" }}>
                    <br />
                  </th>
                  <th style={{ fontSize: "15px" }}>
                    <strong>&nbsp;</strong>
                    <br />
                  </th>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <th style={{ fontSize: "15px" }}>
                    Criterion B1
                    <br />
                  </th>
                  <td
                    className="flex-fill justify-content-center align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                  <td
                    className="align-content-center"
                    style={{ fontSize: "15px", textAlign: "center" }}
                  ></td>
                </tr>
                <tr style={{ fontSize: "15px" }}>
                  <th style={{ fontSize: "15px" }}>
                    <strong>Criterion B2</strong>
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
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-info"
              data-toggle="modal"
              data-target="#modal1"
              type="button"
            >
              Add SLO
            </button>
          </div>
          <div className="row">
            <div className="col">
              <a href="/">
                <button className="btn btn-primary text-justify" type="button">
                  Next
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
