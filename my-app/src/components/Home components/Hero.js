import React from "react";
import classes from "../../css/hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes["hero-contents"]}>
        <h1 className={classes["hero-header"]}>Great coffee made simple.</h1>
        <p className={classes["hero-description"]}>
          Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className={classes["create--plan--button"]}>
          Create your plan
        </button>
      </div>
    </section>
  );
};

export default Hero;
