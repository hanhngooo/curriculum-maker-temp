import React from "react";

export default function ContinueButton(props) {
  return (
    <div className="row">
      <div className="col">
        <a href={props.url}>
          <button className="btn btn-primary text-justify" type="button">
            Continue
          </button>
        </a>
      </div>
    </div>
  );
}
