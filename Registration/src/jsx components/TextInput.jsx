import React, { Component } from 'react'
import '../css components/Input.css'

const TextInput = (props) => {
    return(
        <div className="text-input">
            <label htmlFor={props.field}>{props.name}</label>
            <input type={props.type} id={props.field} name={props.field} />
        </div>
    )
}

export default TextInput;