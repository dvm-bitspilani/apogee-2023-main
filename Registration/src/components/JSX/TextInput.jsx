import React, { Component, useEffect, useState } from "react";
import "../CSS/Input.css";

const TextInput = props => {
  const [value, setValue] = useState("");

  useEffect(() => {
    props.valueSet(value);
  }, [value]);

  return (
    <div className="input">
      <label htmlFor={props.field}>{props.name}</label>
      <input
        required
        className="text-input"
        type={props.type}
        id={props.field}
        name={props.field}
        onChange={evt => {
          setValue(evt.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
