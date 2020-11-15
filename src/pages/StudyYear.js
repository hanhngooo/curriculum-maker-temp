import React from "react";

export default function StudyYear() {
  return (
    <div class="pageContainer">
      <div class="main">
        <h3 class="text-info">
          <strong>Study Years</strong>
        </h3>
        <div class="main__singleForm">
          <div class="form-group">
            <label>
              <strong>Select Study Year</strong>
              <br />
            </label>
            <select class="form-control">
              <option value="1" selected="">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              <strong>Select Competences</strong>
              <br />
            </label>
            <select class="form-control">
              <option value="Competence X" selected="">
                Competence X
              </option>
              <option value="Competence Y">Competence Y</option>
            </select>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="text-left" style={{ fontSize: "15px" }}>
                <th>
                  <strong>Competence Levels</strong>
                </th>
                <th class="text-center" style={{ width: "130px" }}>
                  <strong>Level 1</strong>
                </th>
                <th class="text-center" style={{ width: "130px" }}>
                  <strong>Level 2</strong>
                </th>
                <th class="text-center" style={{ width: "130px" }}>
                  <strong>Level 3</strong>
                </th>
                <th class="text-center" style={{ width: "130px" }}>
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
                  class="flex-fill justify-content-center align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    class="align-content-center"
                    type="checkbox"
                    style={{ textAlign: "center" }}
                  />
                </td>
                <td
                  class="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    class="align-items-center align-content-center"
                    type="checkbox"
                    style={{ textAlign: "center" }}
                  />
                </td>
                <td style={{ fontSize: "15px", textAlign: "center" }}>
                  <input type="checkbox" style={{ textAlign: "center" }} />
                </td>
                <td
                  class="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input type="checkbox" />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    class="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    class="form-control"
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
                  class="flex-fill justify-content-center align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    class="align-content-center"
                    type="checkbox"
                    style={{ textAlign: "center" }}
                  />
                </td>
                <td
                  class="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input
                    class="align-items-center align-content-center"
                    type="checkbox"
                    style={{ textAlign: "center" }}
                  />
                </td>
                <td style={{ fontSize: "15px", textAlign: "center" }}>
                  <input type="checkbox" style={{ textAlign: "center" }} />
                </td>
                <td
                  class="align-content-center"
                  style={{ fontSize: "15px", textAlign: "center" }}
                >
                  <input type="checkbox" />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    class="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
                <td style={{ fontSize: "15px" }}>
                  <input
                    type="text"
                    class="form-control"
                    style={{ borderStyle: "none", fontSize: "15px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-info text-justify" type="button">
            Add another study year
          </button>
        </div>
        <div class="row">
          <div class="col">
            <a href="/addSLO">
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
