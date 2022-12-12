import React from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { ShowSubscribeModalContext } from "../../App";
import classes from "../../css/subscribemodal.module.css";
const SubscribeModal = () => {
  const { drinkingMethod, coffeeType, amount, grind, delivery, price } =
    useContext(ShowSubscribeModalContext);

  return createPortal(
    <div className={classes["subscribe-modal"]}>
      <h4 className={classes["subheader"]}>Order Summary</h4>
      <div className={classes["summary"]}>
        <p className={classes["order-summary"]}>
          <span className={classes["inverted-commas"]}>&#8220;</span>I drink my
          coffee as{" "}
          <span className={classes["variable"]}> {drinkingMethod}</span>, with a
          <span className={classes["variable"]}> {coffeeType}</span> type of
          bean. <span className={classes["variable"]}> {amount}</span> ground
          ala <span className={classes["variable"]}> {grind}</span>, sent to me
          <span className={classes["variable"]}> {delivery}</span> .
          <span className={classes["inverted-commas"]}>&#8221;</span>
        </p>
        <p className={classes["confirm-paragraph"]}>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.{" "}
        </p>
        <button className={classes["create--plan--button"]}>
          Checkout - ${price} / mo
        </button>
      </div>
    </div>,
    document.querySelector("#modal-root")
  );
};

export default SubscribeModal;
