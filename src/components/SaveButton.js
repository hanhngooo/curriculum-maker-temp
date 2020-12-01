import React from "react";

export default function SaveButton(props) {
  return (
    <div className="row">
      <div className="col">
        <button
          className="btn btn-info"
          type="submit"
          disabled={props.disabled}
        >
          Add {props.dataName}
        </button>
      </div>
    </div>
  );
}
