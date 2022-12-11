import React from "react";
import ReactDOM from "react-dom";
import classes from "../../css/modal.module.css";
import { Link } from "react-router-dom";
const NavModal = ({ closeNav }) => {
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <Link
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/"
      >
        Home
      </Link>
      <Link
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/about-us"
      >
        About Us
      </Link>
      <Link
        onClick={() => {
          closeNav();
        }}
        className={classes["link"]}
        to="/subscribe"
      >
        Create Your Plan
      </Link>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default NavModal;
