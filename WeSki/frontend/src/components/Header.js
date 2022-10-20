import React from "react";
import Navbar from "./Navbar";
import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../svg/weSkiLogo.svg";

function Header({ setInputsData, submitHandler, inputsData }) {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <div>
          <Logo />
        </div>
        <Navbar
          submitHandler={submitHandler}
          inputsData={inputsData}
          setInputsData={setInputsData}
        />
      </div>
    </header>
  );
}

export default Header;
