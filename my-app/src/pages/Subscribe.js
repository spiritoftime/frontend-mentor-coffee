import React, { useEffect } from "react";
import Hero from "../components/subscribe components/Hero";
import Steps from "../components/subscribe components/Steps";
import Form from "../components/subscribe components/Form";
import classes from "../css/subscribe.module.css";
import SubscribeModal from "../components/subscribe components/SubscribeModal";
import Summary from "../components/subscribe components/Summary";
import { useState, useReducer } from "react";
const reducer = (state, action) => {
  let updateObj = {};
  const stateKeys = Object.keys(state);
  const actionKey = Object.keys(action)[0];

  if (action[actionKey] !== stateKeys[actionKey - 1]) {
    updateObj[stateKeys[actionKey - 1]] = action[actionKey];

    return { ...state, ...updateObj };
  }
  return state;
};
// the createContext needs to be created globally so that you can consume it later at Question.js
export const DispatchContext = React.createContext();
const Subscribe = () => {
  const [showSummary, setShowSummary] = useState(false);
  // dispatch it to every question - should return the subheader of selected option
  const [getSelectedOptions, dispatch] = useReducer(reducer, {
    drinkingMethod: "",
    coffeeType: "",
    amount: "",
    grind: "",
    delivery: "",
  });

  // only show summary when all the options have a valid selected option (ie. not "")
  useEffect(() => {
    console.log(getSelectedOptions);
    const numSelected = Object.values(getSelectedOptions).reduce(
      (acc, value) => {
        if (value !== "") return (acc += 1);
        return acc;
      },
      0
    );
    if (numSelected === Object.keys(getSelectedOptions).length)
      setShowSummary(true);
    else setShowSummary(false);
  }, [getSelectedOptions]);
  return (
    <>
      {!setShowSummary && <SubscribeModal />}
      <div className={classes["subscribe"]}>
        <Hero />
        <Steps />
        <DispatchContext.Provider value={dispatch}>
          <Form />
          <Summary />
        </DispatchContext.Provider>
      </div>
    </>
  );
};

export default Subscribe;
