import React, { Component } from "react";
import RadioButtonGroup from "react-custom-radio-buttons-group";
import "../CSS/Input.css";

const RadioInput = props => {
  const onChange = () => {};

  return (
    <div className="input">
      <label htmlFor={props.field}>{props.name}</label>
      <RadioButtonGroup
        onChange={onChange}
        hide={false}
        values={["Male", "Female", "Others"]}
      />
    </div>
  );
};

export default RadioInput;
