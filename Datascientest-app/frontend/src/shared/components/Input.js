import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <label for={props.id}>{props.text}</label>
      <input
        className="field-input"
        type={props.type}
        id={props.id}
        onChange={props.handleChange}
        value={props.value}
        name={props.id}
      ></input>
    </div>
  );
};

export default Input;
