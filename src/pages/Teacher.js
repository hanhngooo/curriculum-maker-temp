import React from "react";

export default function Teacher() {
  return (
    <div class="pageContainer">
      <div class="modal fade" role="dialog" tabindex="-1" id="modal1">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Invite teacher to your curriculum</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>
                  <strong>&nbsp;Email address</strong>
                  <br />
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>
                  <strong>&nbsp;Subject</strong>
                  <br />
                </label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>
                  <strong>&nbsp;Message</strong>
                  <br />
                </label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-light" type="button" data-dismiss="modal">
                Close
              </button>
              <button class="btn btn-primary" type="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="main">
        <h3 class="text-info">
          <strong>Teachers</strong>
        </h3>
        <div class="main__singleForm">
          <div class="form-group">
            <label>
              <strong>&nbsp;Name</strong>
              <br />
            </label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <strong>Email address</strong>
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
        <div class="d-flex justify-content-center align-items-center"></div>
        <div class="row align-items-center">
          <div class="col-sm-12 col-xl-6 d-lg-flex justify-content-lg-center">
            <button class="btn btn-info text-left" type="button">
              Add another teacher
            </button>
          </div>
          <div class="col-sm-12 col-xl-6 d-lg-flex justify-content-lg-center">
            <button
              class="btn btn-info"
              data-toggle="modal"
              data-target="#modal1"
              type="button"
            >
              Invite a teacher
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <a href="/addSomething">
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
