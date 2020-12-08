import React, { useEffect } from "react";
import { Field } from "formik";
const CalculatedField = (props) => {
  const { values, setFieldValue } = props;
  useEffect(() => {
    let ectTotalValue = 0;
    let ectHoursValue = 0;
    if (values.duration && values.ectPerYear) {
      ectTotalValue = values.duration * values.ectPerYear;
      ectHoursValue = values.duration * values.ectPerYear * 28;
    }
    setFieldValue("ectTotal", ectTotalValue);
    setFieldValue("ectHours", ectHoursValue);
  }, [values, setFieldValue]);

  return (
    <div>
      {props.name === "ectTotal" ? (
        <Field type="number" name={props.name} className="form-control" />
      ) : props.name === "ectHours" ? (
        <Field type="number" name={props.name} className="form-control" />
      ) : null}
    </div>
  );
};

export default CalculatedField;
