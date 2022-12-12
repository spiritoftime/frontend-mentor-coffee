import React from "react";
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
export const DispatchContext = React.createContext();
export const OrderContext = React.createContext();
const useSubscribe = () => {
  const [getSelectedOptions, dispatch] = useReducer(reducer, {
    drinkingMethod: "",
    coffeeType: "",
    amount: "",
    grind: "",
    delivery: "",
  });
  const { delivery } = getSelectedOptions;
  let price = "0";
  if (delivery === "Every week") price = "14.00";
  else if (delivery === "Every 2 weeks") price = "17.25";
  else if (delivery === "Every month") price = "22.50";

  return {
    dispatchHandler: dispatch,
    selectedOptions: getSelectedOptions,
    price: price,
  };
};

export default useSubscribe;
