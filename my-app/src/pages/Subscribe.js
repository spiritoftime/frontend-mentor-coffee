import React, { useEffect, useMemo } from "react";
import Hero from "../components/subscribe components/Hero";
import Steps from "../components/subscribe components/Steps";
import Form from "../components/subscribe components/Form";
import classes from "../css/subscribe.module.css";
import SubscribeModal from "../components/subscribe components/SubscribeModal";
import Summary from "../components/subscribe components/Summary";

const Subscribe = ({ passPropsUpHandler }) => {
  // only show summary when all the options have a valid selected option (ie. not "")
  // useEffect(() => {
  //   const numSelected = Object.values(getSelectedOptions).reduce(
  //     (acc, value) => {
  //       if (value !== "") return (acc += 1);
  //       return acc;
  //     },
  //     0
  //   );
  //   if (numSelected === Object.keys(getSelectedOptions).length)
  //     setShowSummary(true);
  //   else setShowSummary(false);
  // }, [getSelectedOptions]);
  return (
    <>
      <div className={classes["subscribe"]}>
        <Hero />
        <Steps />

        <Form />
      </div>
    </>
  );
};

export default Subscribe;
