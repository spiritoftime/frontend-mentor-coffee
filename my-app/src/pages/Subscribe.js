import React from "react";
import Hero from "../components/subscribe components/Hero";
import Steps from "../components/subscribe components/Steps";
import Form from "../components/subscribe components/Form";
import classes from "../css/subscribe.module.css";
const Subscribe = () => {
  return (
    <div className={classes["subscribe"]}>
      <Hero />
      <Steps />
      <Form />
    </div>
  );
};

export default Subscribe;
