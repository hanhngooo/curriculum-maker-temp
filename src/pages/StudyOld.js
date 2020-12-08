import React, { useState } from "react";

export default function Study() {
  const [graduateProfileList, setGraduateProfileList] = useState([
    { diplomaTitle: "", diplopmaDescription: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newList = [...graduateProfileList];
    newList[index][name] = value;
    setGraduateProfileList(newList);
  };

  // // handle click event of the Remove button
  // const handleRemoveClick = index => {
  //   const list = [...inputList];
  //   list.splice(index, 1);
  //   setInputList(list);
  // };

  // handle click event of the Add button
  const handleAddClick = () => {
    setGraduateProfileList([
      ...graduateProfileList,
      { diplomaTitle: "", diplopmaDescription: "" },
    ]);
  };

  return (
    <div className="pageContainer">
      <div className="main">
        <h3 className="text-info">
          <strong>Study</strong>
        </h3>
        <div className="main__singleForm">
          <div className="form-group">
            <label>
              <strong>Study Name</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Study Description</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>
              <strong>Study Tags</strong>
              <br />
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-xl-3">
              <div className="form-group">
                <label>
                  <strong>National EQF - Level</strong>
                  <br />
                </label>
                <select className="form-control">
                  <option value="1" selected="">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">
              <div className="form-group">
                <label>
                  <strong>National EQF - Name</strong>
                  <br />
                </label>
                <input
                  type="text"
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
                <select className="form-control">
                  <option value="1" selected="">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-3">
              <div className="form-group">
                <label>
                  <strong>International-EQF-Name</strong>
                  <br />
                </label>
                <input
                  type="text"
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
                <input
                  type="text"
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
                <input
                  type="text"
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="E.g. 180"
                />
              </div>
            </div>
            <div className="col-sm-3 col-md-6 col-xl-3">
              <div className="form-group">
                <label>
                  <strong>ECTS converted into hours</strong>
                  <br />
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E.g. 5040"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="main__singleForm">
          <h5 className="text-info">
            <strong>&nbsp;Level: Bachelor</strong>
          </h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <strong>
                      <span style={{ textDecoration: "underline" }}>
                        Dublin Descriptors
                      </span>
                    </strong>
                  </th>
                  <th className="text-center">
                    <strong>Level 1</strong>
                  </th>
                  <th className="text-center">
                    <strong>Level 2</strong>
                  </th>
                  <th className="text-center">
                    <strong>Level 3</strong>
                  </th>
                  <th className="text-center">
                    <strong>Level 4</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <strong>Knowledge and insight</strong>
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Apply knowledge and insight</strong>
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Judgement</strong>
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Communication</strong>
                    <br />
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <strong>Learning skills</strong>
                    <br />
                  </th>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderStyle: "none" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="main__singleForm">
          <h5 className="text-info">
            <strong>Graduate Profile</strong>
          </h5>
        </div>
        {graduateProfileList.map((x, i) => {
          return (
            <div className="row">
              <div className="col-sm-12 col-md-5 col-xl-5">
                <div className="form-group">
                  <label>
                    Diploma title
                    <br />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diplomaTitle"
                    value={x.diplomaTitle}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-5 col-xl-5">
                <div className="form-group">
                  <label>
                    Description
                    <br />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="diplomaDescription"
                    value={x.diplopmaDescription}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-1 col-xl-1 d-flex justify-content-center">
                <div className="d-flex justify-content-center align-items-center">
                  {graduateProfileList.length - 1 === i && (
                    <button
                      className="btn btn-info text-justify d-flex justify-content-center align-items-center"
                      type="button"
                      style={{ width: "31px", height: "33px" }}
                      onClick={handleAddClick}
                    >
                      <i className="fa fa-plus d-lg-flex justify-content-center align-content-center align-self-center align-items-lg-center"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="row">
          <div className="col">
            <a href="/addProfession">
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
