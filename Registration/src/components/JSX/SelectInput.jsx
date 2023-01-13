import React, { Component } from "react";
import Select from "react-select";
import "../CSS/Input.css";

const SelectInput = props => {
  return (
    <div className="text-input">
      <label htmlFor={props.field}>{props.name}</label>
      <Select
        options={props.options}
        id={props.field}
        name={props.field}
        isMulti={props.isMulti}
        classNamePrefix="react-select"
        placeholder=""
      ></Select>
    </div>
  );
};

export default SelectInput;
