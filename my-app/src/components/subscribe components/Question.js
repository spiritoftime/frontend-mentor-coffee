import React, { useCallback } from "react";
import classes from "../../css/question.module.css";
import Option from "./Option";
import { FormContext } from "../../App";
import { useState, useContext } from "react";
const Question = ({ question: { question, options, questionNum } }) => {
  const { dispatchHandler } = useContext(FormContext);
  const dispatchOption = useCallback(
    (selectedOption) => {
      const dispatchObj = {};
      dispatchObj[questionNum] = selectedOption;
      dispatchHandler(dispatchObj);
    },
    [dispatchHandler, questionNum]
  );

  const [showOptions, setShowOptions] = useState(true);
  const clickDisplayOptionHandler = (e) => {
    setShowOptions((prevstate) => !prevstate);
  };
  // making the nested options obj into an array of objects to map the options out as JSX elements
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
            <Option
              dispatchOption={dispatchOption}
              key={option.key}
              option={option}
            />
          ))}
      </div>
    </div>
  );
};

export default Question;
// down arrow
