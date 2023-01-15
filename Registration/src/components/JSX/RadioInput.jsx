import React, { Component, useEffect, useState } from "react";
import RadioButtonGroup from "react-custom-radio-buttons-group";
import "../CSS/Input.css";

const RadioInput = props => {
  const [value, setValue] = useState("M");

  useEffect(() => {
    props.valueSet(value);
  }, [value]);

  useEffect(() => {
    setValue("M");
  }, []);

  return (
    <div className="input">
      <label htmlFor={props.field}>{props.name}</label>
      <RadioButtonGroup
        onChange={evt => {
          setValue(evt.target.value[0]);
        }}
        hide={false}
        values={["Male", "Female", "Others"]}
      />
    </div>
  );
};

export default RadioInput;
