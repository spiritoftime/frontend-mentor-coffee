import React from "react";
import { createPortal, ReactDOM } from "react-dom";
import classes from "../../css/subscribemodal.module.css";
const SubscribeModal = () => {
  return createPortal(<></>, document.querySelector("#modal-root"));
};

export default SubscribeModal;
