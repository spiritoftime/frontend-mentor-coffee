import React from "react";
import ReactDOM from "react-dom";
import classes from "../../css/modal.module.css";
import { NavLink } from "react-router-dom";
const NavModal = ({ closeNav }) => {
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <NavLink
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/about-us"
      >
        About Us
      </NavLink>
      <NavLink
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/subscribe"
      >
        Create Your Plan
      </NavLink>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default NavModal;
