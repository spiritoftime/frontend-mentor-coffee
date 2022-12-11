import React from "react";
import classes from "../../css/question.module.css";
import Option from "./Option";
import { useState } from "react";
const Question = ({ question: { question, options } }) => {
  const [showOptions, setShowOptions] = useState(true);
  const clickDisplayOptionHandler = (e) => {
    setShowOptions((prevstate) => !prevstate);
  };
  const optionsArray = Object.entries(options).reduce(
    (acc, [key, value], idx) => {
      const obj = { ...value, key: idx };
      acc.push(obj);
      return acc; // important!
    },
    []
  );

  return (
    <div className={classes["question"]}>
      <div className={classes["question-bar"]}>
        <h2 className={classes["question-subheader"]}>{question}</h2>
        <svg
          onClick={clickDisplayOptionHandler}
          className={showOptions ? classes["icon"] : classes["close"]}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.59 0.59 18.19 11.92"
        >
          <path
            d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
            fill="#0E8784"
            fill-rule="nonzero"
          ></path>
        </svg>
      </div>
      <div className={classes["options"]}>
        {showOptions &&
          optionsArray.map((option) => (
            <Option key={option.key} option={option} />
          ))}
      </div>
    </div>
  );
};

export default Question;
// down arrow
