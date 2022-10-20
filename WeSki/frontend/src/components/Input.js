import React from "react";
import classes from "./Input.module.css";

function Input({ inputName, type, placeholder, onChange }) {
  const changeHandler = (e) => {
    onChange((prevState) => ({
      ...prevState,
      [inputName]: e.target.value,
    }));
  };
  return (
    <input
      className={classes.input}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
}

export default Input;
