import React, { useState } from "react";
import { useContext } from "react";

import classes from "../../css/summary.module.css";

import { SetSubscribeModalContext } from "../../App";
import { FormContext } from "../../App";
const Summary = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const setShowModal = useContext(SetSubscribeModalContext);
  const { drinkingMethod, coffeeType, amount, grind, delivery } =
    useContext(FormContext);

  const showModalHandler = () => {
    setBtnClicked(true);
    setShowModal(true);
    // apply
    document.getElementById("root").style.backgroundColor = "grey";
  };

  return (
    <div className={classes["order-div"]}>
      <div className={classes["summary"]}>
        <h4 className={classes["subheader"]}>ORDER SUMMARY</h4>
        <p className={classes["order-summary"]}>
          <span>&#8220;</span>I drink my coffee as{" "}
          <span className={classes["variable"]}> {drinkingMethod}</span>, with a
          <span className={classes["variable"]}> {coffeeType}</span> type of
          bean. <span className={classes["variable"]}> {amount}</span> ground
          ala <span className={classes["variable"]}> {grind}</span>, sent to me
          <span className={classes["variable"]}> {delivery}</span> .
          <span>&#8221;</span>
        </p>
      </div>
      <button
        className={classes["create--plan--button"]}
        onClick={showModalHandler}
      >
        Create your plan
      </button>
    </div>
  );
};

export default Summary;
