import React from "react";
import classes from "../../css/step.module.css";
const Step = ({ step, subheader, description }) => {
  return (
    <div className={classes["step"]}>
      <span className={classes["number"]}>{step}</span>
      <h2 className={classes["subheader"]}>{subheader}</h2>
      <p className={classes["description"]}>{description}</p>
    </div>
  );
};

export default Step;
