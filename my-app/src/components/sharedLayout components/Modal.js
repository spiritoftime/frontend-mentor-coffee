import React from "react";
import ReactDOM from "react-dom";
import classes from "../../css/modal.module.css";
const NavModal = () => {
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <a className={classes["link"]} href="#">
        Home
      </a>
      <a className={classes["link"]} href="#">
        About Us
      </a>
      <a className={classes["link"]} href="#">
        Create Your Plan
      </a>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default NavModal;
