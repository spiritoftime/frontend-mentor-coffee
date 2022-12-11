import React from "react";
import classes from "../../css/step.module.css";
const Step = ({ step, subheader, description, page = "" }) => {
  return (
    <div className={classes["step"]}>
      <span className={classes["number"]}>{step}</span>
      <h2
        className={
          page === "" ? classes["subheader"] : classes["subscribe-subheader"]
        }
      >
        {subheader}
      </h2>
      <p
        className={
          page === ""
            ? classes["description"]
            : classes["subscribe-description"]
        }
      >
        {description}
      </p>
    </div>
  );
};

export default Step;
