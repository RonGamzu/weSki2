import React, { useState } from "react";
import { destinations } from "../DAL/api";
import Dropdown from "./Dropdown";
import Input from "./Input";
import classes from "./Navbar.module.css";

function Navbar({ setInputsData, submitHandler, inputsData }) {
  return (
    <nav className={classes.nav}>
      <Dropdown
        dropdownName="ski_site"
        options={destinations}
        onChange={setInputsData}
      />
      <Dropdown
        dropdownName="group_size"
        options={destinations}
        onChange={setInputsData}
      />
      <Input
        inputName="from_date"
        type="date"
        placeholder="Departure Date"
        onChange={setInputsData}
      />
      <Input
        inputName="to_date"
        type="date"
        placeholder="Return Date"
        onChange={setInputsData}
      />
      <button
        className={classes.searchButton}
        onClick={() => submitHandler(inputsData)}
      >
        Search
      </button>
    </nav>
  );
}

export default Navbar;
