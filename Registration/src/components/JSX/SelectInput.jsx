import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../CSS/Input.css";

const SelectInput = props => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value !== null) {
      if (props.isMulti) {
        props.valueSet(value.map(val => val.value));
      } else {
        props.valueSet(value.value);
      }
    }
  }, [value]);

  const colourStyles = {
    control: base => ({ ...base, border: 0, boxShadow: "none" }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "#51718d" : "#1b2025",
        color: "#BFDFFFCC",
        cursor: "pointer",
        borderBottom: "2px solid #BFDFFFCC",

        ":active": {
          ...styles[":active"],
          backgroundColor: "",
        },
      };
    },
    multiValue: styles => ({
      ...styles,
      backgroundColor: "#BFDFFFCC",
    }),
    multiValueLabel: styles => ({
      ...styles,
      color: "#1b2025",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: "#1b2025",
      borderRadius: "0",

      ":hover": {
        backgroundColor: "#1b2025",
        cursor: "pointer",
        color: "#BFDFFFCC",
      },
    }),
    menuPortal: base => ({ ...base, zIndex: 300, border: "none" }),
    dropdownIndicator: base => ({
      ...base,
      color: "#BFDFFFCC",
    }),
    indicatorSeparator: () => {},
  };

  return (
    <div className="input">
      <label htmlFor={props.field}>{props.name}</label>
      <Select
        required
        id={props.field}
        closeMenuOnSelect={!props.isMulti}
        options={props.options}
        name={props.field}
        isMulti={props.isMulti}
        classNamePrefix="react-select"
        placeholder=""
        isClearable
        menuPortalTarget={document.body}
        styles={colourStyles}
        onChange={choice => {
          setValue(choice);
        }}
      ></Select>
    </div>
  );
};

export default SelectInput;
