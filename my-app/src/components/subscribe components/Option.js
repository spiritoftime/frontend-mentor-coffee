import React from "react";
import classes from "../../css/option.module.css";
const Option = ({ option: { header, text } }) => {
  return (
    <div className={classes["option"]}>
      <h3 className={classes["subheader"]}>{header}</h3>
      <p className={classes["description"]}>{text}</p>
    </div>
  );
};

export default Option;
