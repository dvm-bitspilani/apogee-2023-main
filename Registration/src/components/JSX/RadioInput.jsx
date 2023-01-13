import React, { Component } from "react";
import RadioButtonGroup from "react-custom-radio-buttons-group";
import "../CSS/Input.css";

const RadioInput = props => {
  return (
    <div className="text-input">
      <label htmlFor={props.field}>{props.name}</label>
      <RadioButtonGroup hide={false} values={["Male", "Female", "Others"]} />
    </div>
  );
};

export default RadioInput;
