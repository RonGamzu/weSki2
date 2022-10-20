import React from "react";
import classes from "./Dropdown.module.css";

function Dropdown({ dropdownName, options, onChange }) {
  const changeHandler = (e) => {
    onChange((prevState) => ({
      ...prevState,
      [dropdownName]: e.target.value,
    }));
  };
  return (
    <select
      defaultValue={"1"}
      className={classes.dropdown}
      id={dropdownName}
      name={dropdownName}
      onChange={changeHandler}
    >
      {dropdownName === "group_size" &&
        [...Array(11)].map((e, i) => {
          if (!i) {
            return;
          }
          return (
            <option key={i} value={i}>
              {i + (i === 1 ? " person" : " people")}
            </option>
          );
        })}
      {dropdownName === "ski_site" &&
        options.map((item, index) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
    </select>
  );
}

export default Dropdown;
