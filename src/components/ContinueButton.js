import React from "react";
import { Link } from "react-router-dom";

export default function ContinueButton(props) {
  return (
    <div className="row">
      <div className="col">
        <Link to={props.url}>
          <button className="btn btn-primary text-justify" type="button">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}
