import React, { Component } from "react";
import "../CSS/Input.css";

const TextInput = props => {
  return (
    <div className="input">
      <label htmlFor={props.field}>{props.name}</label>
      <input className="text-input" type={props.type} id={props.field} name={props.field} />
    </div>
  );
};

export default TextInput;
