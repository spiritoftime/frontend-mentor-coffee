import React, { useEffect } from "react";
import classes from "../../css/option.module.css";

import { useState } from "react";
const Option = ({ option: { header, text }, dispatchOption }) => {
  const [selected, setSelected] = useState(false);
  const selectOptionHandler = (e) => {
    setSelected((prevState) => !prevState);
  };
  useEffect(() => {
    if (selected) dispatchOption(header);
    else dispatchOption("");
  }, [selected, dispatchOption, header]);
  return (
    <div
      onClick={selectOptionHandler}
      className={selected ? classes["selected-option"] : classes["option"]}
    >
      <h3
        className={
          selected ? classes["selected-subheader"] : classes["subheader"]
        }
      >
        {header}
      </h3>
      <p
        className={
          selected ? classes["selected-description"] : classes["description"]
        }
      >
        {text}
      </p>
    </div>
  );
};

export default Option;
